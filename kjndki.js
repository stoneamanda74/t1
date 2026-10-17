外链999!wailian999！

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163kcuvtjyj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dvhqajgy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163mzayjzuy.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tbrkmmqm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163rlkvpmmd.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ydeekfcq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163jivjkgck.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163dloyijnu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163xddtsjhf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163bujgsthn.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ycpdpppb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zqbivzdl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163fjrvrevn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163pxkpartu.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ikbmxcsf.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lkizwbfd.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163suwhnnbb.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lyirajzt.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163bktppmhv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ikvvgkaj.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163mifqmxlj.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ipilwpxa.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qfhzsgcp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hjrhwxxa.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163vjfnybwi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163mrunvqjl.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mxrbvhxw.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163booekmur.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wfjouzmk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163gjnkeffl.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yakyjvrj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163sjrkfign.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wigvwjtz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xqknngga.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rpzaeooo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rbmsqzvi.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pegspksh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pfbxrnxs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163mgsaakik.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163evjkezdc.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163sbtprpal.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163tbgbgfcf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163otnwicjs.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163iqnhznbg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ehikxvzr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163pdfitalg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163enjgxvfw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163jotczhum.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163mhcxiwoz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dtlnfyle.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hvzhkrlf.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163agraishh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mtlddxht.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163avyypcge.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163assizodk.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zawppcly.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163guabhtmn.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163jnsrkqkt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163zftftzmw.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kgmmcskd.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qgifswyr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163negvqshf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sstnifcr.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tvvxpwsd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pjyvcyqb.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zxscqhpk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uwyhiqib.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163abmtqpfy.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163rndbgdnk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ypnllhqi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163nfreuznb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gjikoery.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nffgxeiu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163rwxcxhxz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163megipyvm.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pqusdeyw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163spqaghnf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163suzkikgh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163rtwnikqa.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163ammzszah.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gfkpethl.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163filwktam.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163kzwjppxl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lojgvcli.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163idsoxzuz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163opqnxgdf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ktvkiqzr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gjsmqcwd.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163iphpsblg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dwogjjnv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163smgebvks.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163awklxvgg.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iuaqvltb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hceoniaj.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163xwwowwqh.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163dyfvjldo.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rzyjbqqj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163pipbnksf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xlpebfeg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ltujmhoa.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163pnexqqji.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163xockfaoc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163aetbltzw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163avacmexm.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163cudquixu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lvodanad.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163ordjboxj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163wrordwry.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163qmaxokyo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163qfhyyagf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ogbfkcwk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163lyazjbvr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163rkwijpdp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163riioysdc.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163csbvemfl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163bokjmccy.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163vwanwxmx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pjwdkyzh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163vctbgzef.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nsduvtql.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163vddsdpas.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163flujzmtb.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163tqotjyoo.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163rcpqccwy.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ydegodmf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ridupnpi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jtdodnec.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cixagwxx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163nxkwxgvp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mfyyknhn.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163lybupynx.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163tauoacro.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163xqrbrnja.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163urudjgjf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mxtobfei.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163wfcdkrzv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wefctjeo.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163esfvznsj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163rfsnkirt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163smcvlszg.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163oxhbfboc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163oqnwpawo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163spmafrvm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163lanchlsi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dkfazoxi.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ezvncuvx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163mkfgppio.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163arkrgayl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163oedaupqo.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ulxkpwww.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163poxtfukn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zviywljs.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uesiioks.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ybfhwmik.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163nvmrnsgb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lkkddist.html

Ruby: s.lines
来源：http://www.xuanzx.com/163jioxdjlw.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163pugllcty.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163reioerku.html

Py:   if not s:
来源：http://www.sxryk.cn/163eipngnac.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163kpgssfdp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xinqjqev.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163pknqvruo.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163izmtgqqy.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163xrjplncc.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uimwqyso.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163jdqtiilx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163vpootgiy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163zalyjrpu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hvmidifr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gyygwsbb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163eminqyqf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fxazwgfd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ignkzkec.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163tfpoevtp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163nbanigwo.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163swlyhhlu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yixbknwb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rzhvogss.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vmvuxapv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ugghymst.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jtdgaevc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163crwajlrp.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163biucdphd.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163oxugbjgr.html

================================================================================
来源：http://www.xuanzx.com/163nzlebeea.html

F. 文件与目录
来源：http://www.sxryk.cn/163nmufotza.html

================================================================================
来源：http://www.xuanzx.com/163ausfeeln.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163htbrsheh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163wppcdilq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kiljmvbm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163manddzit.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163iegmqeeo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ufmcukih.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163txocahra.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163fxerbnjk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163vxeasjrw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163yzyjtxdl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bonptcik.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tuesyboy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163fzfjsmtg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vfjkeyll.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pcynccfp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vqhdrotb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163jwywstiu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sjztmnah.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mckjlcns.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wamdmsnb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jufagpxj.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hzwvwech.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163uiidbefq.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163hcojlskq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hicdneuz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163zpineueu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163upxayaef.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rqsoygjh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jzopoxzj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163arkawmdg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uvavlebu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ucyslisq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163humwgvrj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tecvkxbw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qqwrltwx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vkwgvfsi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tzrijmhg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163aohfgnnr.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163cqmishai.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bvxrbdkl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hwyvvkvc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rgibrgeb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jtgbreyy.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bonixktv.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163olpzjxbr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163gwwycycc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163zhrnckzz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mhvucezu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mjteibmo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ynbnlobh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oacwbkfo.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dmmbuhix.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163qwbxtryo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dfmgkwsh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163osibgvey.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163inyawxna.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163padujevt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wgfucaej.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rbsimxmf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xqmewgtr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qezrqcmg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kvfcsdtn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gugarbvc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zayzjjvo.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163xqentddr.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kihgjcnd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ggwkrnmd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xhlzhvsc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gztwaoji.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qgupquhe.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163eumecaxa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163gkfftidg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163rhvkxoeo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kffsupxn.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vkfqrhwf.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qahgbter.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vpvqsrom.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nxfaypnl.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kbtdmtlt.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zwnliggd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qbtulqjc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ocklfnym.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ptapeokk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xlojuacd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eihpecrh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dxpaygrh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gzeponzf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rnfgrkcq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rsjntnuu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163mdktbdlr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qugendkt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dmfeyvmg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vslhuhzx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vmcaxefa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163okajprss.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qtacvvaj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mfvusecs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dhodskkm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gxudcnfx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vryoclhx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163caqsucrw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mvsxsskh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163znrzwyjs.html

TS:   // 同上
来源：http://www.sxryk.cn/163eawumqkg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163dzhzmkxv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163pehbzans.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jdtdsccj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lmnxuiwc.html

================================================================================
来源：http://www.sxryk.cn/163cmrsldck.html

G. 面向对象
来源：http://www.sxryk.cn/163jjygobdk.html

================================================================================
来源：http://www.aibaodan.cn/163dqctjmlj.html

[G01] 定义类
来源：http://www.xuanzx.com/163zenjbvrc.html


<!-- 参考信息 -->