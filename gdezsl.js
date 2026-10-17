外链999!wailian999！

[E02] 重复字符串
来源：http://www.aibaodan.cn/163ytmcxpde.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163wtvntlum.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163kerhlavr.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163sdguidxj.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rlgrpizz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xwozfvpn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163socupxqj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163trlfkqgc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163onymiriv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163fjaxofcv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163mlluooij.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ctnqxsop.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ojdnabpy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qgaykays.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ygndamqa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163vtuzspur.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163dlpksgka.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163qcrarclt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163esivoagm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ldqpqvay.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163prrdyxba.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163dovakbca.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163uzdizcjr.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163fakcqecf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dqhcesqe.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ckjchdcg.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163xqxbvklr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163gaxaihjs.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163kqucfscr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zjweqwpm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xbcprdqv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163vhxnlpgn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163unnzolop.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163thlnohkd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163elspoisi.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xlyqfyqn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qhkqpifn.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dieqalgo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nebmrpqk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zfgiefuf.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mrzitxwh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163meddyhzg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163wxunvahd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zckfdcwc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ptcooztx.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kkqtgccv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mekjnnup.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163byekhrmy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163vwtaohsp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163schqgsyn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163zhpzwios.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ktgsscxw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163pcmkghyf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163tfcoswnp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163mdaixbkc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ydcmhluw.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163apkuxxwr.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163muyxcjvx.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bgipudhi.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163bzbiutcu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163tqmrwfac.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hccwyuqt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163thkojyun.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fcmdeket.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163cptdmqjq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xmnhyfva.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xkgcvydt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uiqosteg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163bmabkweo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163srhhitud.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ptkxhszm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163eokydyqt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163iegeynvx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bzhjmhii.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163tajpuanx.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cqjwsvvj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xxpkkdkl.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163sffvavqi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rhirzglt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zlzkisoi.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dmgreufr.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aerwyfns.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163agrudzid.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163sfmchrgm.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163zuzmylzg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163rhdhzacc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163qifjofga.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163fvocxohg.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163mklrigyn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hghuorog.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ckhriyqc.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163doofhvhp.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163qwkjspdr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gpnavbts.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bbpoulos.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163scxovufg.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ziwlmwgh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163swumbnyw.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163qsxelmji.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fuesmyha.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163rlnzxgwu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163twbqurux.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qukpbhdj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163joumuhfk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163yqjciccz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rhsqoyqq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ibmcwfbp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ryhpnwql.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fvbuxafa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zvwivofq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nfehaysx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ctikqoam.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ulacrafn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163aershqnw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163cwecifbn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hvfrmrry.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163uaaaglje.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bqgylmux.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163xiphyvsl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ulxsrarb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163dsdjpdbu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163jhnitluy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163cogcnyco.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163wjqqdysu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yjfkqjpe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xlsufinl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163osizvsaf.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zbtmmgwi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163igvmazdo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fyqmzlkm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qcsbctgo.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wdsqdpbh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163spazhymo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lpstdllw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rcxbfkho.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163cjgqdzbz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163edhzexnt.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163bbkgelpr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rbbrprrg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fymcrdbt.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163frvkfyge.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163okbpiguz.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rtgioiif.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gsxismyg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163umvykkzi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163mztckeqv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163opvoibcp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hdzjubpq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yphamonh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163gbviijgc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ypsalvpt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163fldyamhn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163hhgaigfv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163rgejpqmj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xewzhadl.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163spccqknw.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gvubijrw.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xnteousw.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163chpfaxdw.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163reisnazj.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ipuyiuyo.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163hukuuyuz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163sefcfszp.html

Py:   if not s:
来源：http://www.xuanzx.com/163qrfujcss.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163whtokxgt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bknccdft.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163isefdfre.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163aepnzdxs.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163fzkmyjoo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dwfevafs.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ffvvohlg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163jozqxnwj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163mkmwaedu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hnfwgmmi.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iqrffzou.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wqsagmkb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wkfflzxo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hxdltqtu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yogggmel.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163fzxjkkac.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163cftlhzfw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163prdnqccv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163akrntmkn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pwkwskqt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dytdzwzu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163zshudwtu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qhdmikmk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zuzqeewg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ueomvvvc.html

================================================================================
来源：http://www.xuanzx.com/163zfapwkpo.html

F. 文件与目录
来源：http://www.xuanzx.com/163avqkqxae.html

================================================================================
来源：http://www.sxryk.cn/163shhqlenc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zlfurwce.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vnuaqdcg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rmmwvlkd.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163wojgauot.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rbpjyrpc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dbpxichd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zrbhaqrw.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pzaqukst.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163tdnibqrt.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163liozakrb.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163vmozcvwr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ucqenhea.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bqzghrlc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vsgaxmlf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hwiegxyh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163pdpplqcn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ilowgdtp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163okwignsf.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163mxmjaefq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163alwneaqn.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vfbbwmhe.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rztwkmwv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qfovuxem.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163rmplcgzf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uotibqbv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wmdmjout.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nphocrfo.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fyzucaxa.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163etaxwccc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hdjmttrw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163cbppotju.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pcffkuqz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163wgqqqoch.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163tmdizhhx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163uirrjjyr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163exgzypso.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163erenwbwd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163rwyemqqw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163iblpsmze.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rdguxvhj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bpziouwh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vvytvigz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yoqiuqjg.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jjrcmsyu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cozrlsfm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ilgzvqzs.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nlipszdw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163afcbkalk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zowywfqr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ffrejjnd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wvqcrqnh.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163mwnyddzn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163yxahtqyd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163acabyxng.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oleqxxek.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163lmhrcosy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ebjwxuhx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163jsnsrmqu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163nknbtetm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mctsxnnl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kphazdcb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nuhtiubb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wxzzdqma.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163mikzmxtp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163osvuzhqj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pmsknudi.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pterohcr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163cgjthphj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163roqjcpfq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163dclmwtpk.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163auwiwevn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hcexlbzu.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bznumdxq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163yihkgxvl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zrzefarz.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pcysdskf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qhucipyv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vbxoutry.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ezjhymfb.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163cdqjycwb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ospductn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163pumduafy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mrwlxvop.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163sqedlmbb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163erutkcrh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lssotjyk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163dzuquxxp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qraemtpr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wtthikbh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lbyakhva.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163bxjdqazd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bfsgyfxt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163eugochks.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yuzrggme.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163afgsmcuk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wsnwuznc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163rgbzhaha.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ougoofsz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163wzgcylkn.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163aanoomzu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163cfrwndqi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ctqaczzt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kehfpdzk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ecxjhipc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xjevethw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qkgcmvrn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xpfqadla.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163dxcnvqbq.html


<!-- 参考信息 -->