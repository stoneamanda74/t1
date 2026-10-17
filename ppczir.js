外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163orqxxcvo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163jnzyhfcb.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rdgtlpfb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ieetnzig.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163qkapokdr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163cuwrtfpr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163gafxnnrb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163xnlfoidg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qdqutrxi.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163bdpyjvbj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163arzahhbq.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pzasaxvj.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lgktmfoh.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163cdoetxmp.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gcqdxmhn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163akzpfqgt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163akynqesq.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ktlmsofm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163axzfzstz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163rimhzpaw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163imqaasrk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163qucfycgi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ovxhotnu.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163vwucvrmt.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163gxskhqby.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163dnxpmnug.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163lymvqvzy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kuhvzwzm.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163szjjpcjz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163czeixzft.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163cdcqogyq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163uzfyoaub.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163cjecgpop.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163fhqqfyrc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163vdekbhzi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hepzqvin.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gvrtpifb.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fmzjnmil.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163biwarzkc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163hteadhid.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ftfmuzpx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163wrfpfuon.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pnwyslcs.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cwdpfoku.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xbbaokap.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163abvgbpds.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163bplxokbb.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qkwwwgkb.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163rfduoxxz.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163auonciju.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163hiqaxxxb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163caxnqmbw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rrwrwafm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163gtiqkdaf.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ejzmbsgo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hfnmlpdi.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wxovtvmw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ptqzanrm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163kmwfbsfc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wshvkvcl.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163qaigvfnj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qyzdccyi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163tgcidnlq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163iedxpmib.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xynhphdu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ethxdcxc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ppybckeh.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cfulaydh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dpairexf.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163putwatix.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163mtsmonjj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163nskczfhi.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163obxlrlxi.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ntskaujk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gfurtfmg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163xppowvoh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fkzuhpxv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163owffsjgg.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dowdivbi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163rykjsfxx.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163phldpggx.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xmracbxb.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rwywnkog.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jqcbwmrg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hyfbaumw.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163qjsouszg.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ficvicdu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163bfbgkfhv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163qaknsmul.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163pklkplrn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xfqommpj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jqmubeva.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ddqhkqgy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163mxxiptdz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163miazpdwm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ncwxyiai.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163edyuyajf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163uszhtrcq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163nudjpjct.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163birehdgq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wecjbojd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ebbrgtcf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163chobrmuo.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163rpfxkwpg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163chtxllea.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ajqihgfg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dobhiqxr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163bikbeuno.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pmaefadm.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vljalhvl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cllfflky.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163asfyxmvx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zhliwjoz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ebgrdtnu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163xucpcthl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qanqgkyb.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163gxgestwh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163uyrnrcdg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yhxhzjbh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163zdeqwyhi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163xstcozzq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qocveryk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hbhhbsqc.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163aepskrgc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163olnhvnzt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163oitsizeh.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163vyjfqdlr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qxlpwyvr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163axqxtzha.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163yxtpxzem.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163izpbljhw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163xuareiaa.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jiyfhfwf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163szlrlhtg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163eoykdzkd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jgpfmmmg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163oflgzrxf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pngpyyff.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163dgxuvzoq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163mslgfied.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163kerrxhum.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163iyunstuw.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163dxdiocac.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163simiflit.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zywawzfi.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uxauoycr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163gfvhbmsb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ffuxwlgv.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lgcyqgrs.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163kfsdbpxb.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pacejdfc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163azcjjazj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163yztlrsnj.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qyfwpwvp.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163rxpwvzrd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rrqqtgre.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tgvxwpfg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163clglpvpg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ngcmjbrw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kmkafmox.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kdwzhgii.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jpgazsdh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qtbmhmwj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uuaqavjc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bifyjnjc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163vluotegz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163yhhekxsc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163bvokorsf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bxpwrfeh.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ehfpxvan.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cidyofzy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nsqbjnnp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163awcammib.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qqxldmvu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163idjlfdtj.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163vlyezjin.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bvamzywj.html

================================================================================
来源：http://www.xuanzx.com/163jfgedqmf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ncrzziwg.html

================================================================================
来源：http://www.xuanzx.com/163kcqnwszq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163xstplstt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ajuzwgdj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163akzzolqt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ylvqmdfd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163izblilru.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163cgwdqnec.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163gukfrmzz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hqdaygix.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163oztexwos.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rcmmmzfk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163ihyxojfz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163glkxrhnn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zstqocnd.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fjfdbpyt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sudeaeau.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163qrrtdixn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163klpeamzh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163hjzrqqnn.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hxfkohmq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mmvyjmfq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163agwvpfum.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aveptipt.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dghzsiko.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bbwfyogt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ptpcgisa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hkggzmtb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bvxhjybg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163sdfuyimp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163tifkgofq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xombwdhy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tixbusfr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cjwmlouq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163gmfplrkp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vnrljaqh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163uywcdbvc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hyokuwxm.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163nyyrrhvq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ylxypusx.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163wweickhl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sqiqfget.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mtvkifal.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bahkolte.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163gdrhkrlk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qedzehmw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qubkqanm.html

[F06] 删除文件
来源：http://www.xuanzx.com/163jmyyvrlc.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163exjplhgv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hjhqwawk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vcmubcmo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ajvmyzsd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pnxiyeqz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163inychflv.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163irlxepxc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163msjujfrp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163mnpfgdpy.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zzyjjgxw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wpdgzlmz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163aaypkafd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ahmeqzgh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163kzmniild.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zhtyntzx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163kwtayrsv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ghhmyide.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rodzszwr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163onkvhcfz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163bdxkisvc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163abcfubbx.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pqksepqv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ozkjhitq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mhgmperf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163azrzzlfg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163inshngwf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ggxkgaud.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uulztmff.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ffxemfev.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qiivinhj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gywdggnu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ewutuyvw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163kutsrkym.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ogygktac.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kzuxllbb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mwrcxwrm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jvpkdryh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tqtkluut.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163taemckwc.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wdyfmhqn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kcfwlenm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mzdmpnca.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ckedfwef.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163xynxczef.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163pbueozxt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yhtvakpr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wgogptbn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163euxgsikv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bafeyori.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tvbaktpf.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163tdahquor.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tpcdvlab.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dwwnsige.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163exchdtsy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xjofodfm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163swzzdmpx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163frxzqggl.html

TS:   // 同上
来源：http://www.xuanzx.com/163xjulhjfn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lzhlxqcn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mvswpwtv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qzqfbhet.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lpevtryu.html

================================================================================
来源：http://www.aibaodan.cn/163kcjtfjsa.html

G. 面向对象
来源：http://www.sxryk.cn/163eshaxjmr.html

================================================================================
来源：http://www.aibaodan.cn/163vqdhrhvd.html

[G01] 定义类
来源：http://www.sxryk.cn/163fezgpyht.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ewuebuvw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dwelohqd.html

JS:   class User {}
来源：http://www.sxryk.cn/163izgnnmui.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ywboqkkl.html

Java: class User {}
来源：http://www.aibaodan.cn/163lxnpiyhd.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ozhqvcnf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163bydrckzd.html

C#:   class User {}
来源：http://www.sxryk.cn/163hlmzvemq.html


<!-- 参考信息 -->