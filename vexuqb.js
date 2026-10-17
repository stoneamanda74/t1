外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ygumyfrm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vftryckq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kazrepgx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163lswinqub.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163xzsnfbod.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fesazcep.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ktvpuzno.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163jqqmyttn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163guqyfsry.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163sfefyqfb.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fcabbsyg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163qepzlvbw.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163giisowpk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163pjtfgdid.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163iikmzmbi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163njbekark.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163gnqmhgyj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kcpbnprv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163irmeplos.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163psodsawo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163emzxbevn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ullhvgdq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163viyirmiq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jlrgwefp.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mphcakmw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zikmhjpr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163fglxxgor.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aszrpviy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163izqdqgfp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dwevrjac.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xajvioie.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163xbwgkxrn.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rkyxfvqr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vairglhk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hsivjgty.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nzpnxkhx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vxashwam.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cyprcxuu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163hnflmqoi.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ivesuekh.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fpcefuzc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163oskxttmr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ytcnjmqb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163knklofms.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163cjpcrjed.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163gajujois.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163hyshnach.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163lpllojvh.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163tpbmmtir.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163hcuioaoi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163bovzezeu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163aynzjgjl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163knbjjoin.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ptzvowky.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jwakeopg.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bshkfegm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163ojabjfrz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tyblyhbm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uncrdijg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163vxyebnlt.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ksuuvlnr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jrozaabf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ubqgovud.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qwfngimt.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163imekpuzq.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tbnejixu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163swbguzfe.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163uxrfflzl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bkpkcpjy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wurelykz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163zvmqzvti.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163adlnwssh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163fzamqgew.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jpskkdvl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163isrolfld.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ldnnebwu.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fhghtvtv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jnldifcu.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zblbkwam.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xqlyesww.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163thqqvqpu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ouhtedgp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mexlbfxt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163xukmtndt.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163hilxbbhc.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163itvgtuil.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163atouzlwe.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163vlqteyyv.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163otoeyomm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163jlcadbeq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cmwvmutc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hiipiltw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163sndwexnk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163gkqyreqr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hekuczss.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dommwxcv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163qusxualb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163srucascw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zuigrctc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163gqbdvpug.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mdmfqdoo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xslhvjkn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163muyfktcg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gejxrcgv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163cvighnay.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xorwavxq.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rnzgyaff.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163anyjgcrd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163malaambp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dltdwayn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163dmamazme.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163nhwaxvsp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rlgsmjyl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163qmmagpvo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ygmaerog.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163nmtjytep.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dxwopatx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hbbckcwl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wylrsnjr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163vprfxwwn.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163sdvyhtcn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163waaixzer.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163njwnjfhn.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ydvqfnhb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163oclayrxl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nbxlbclx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163gvrodwjm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163upyjruxn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163bigomavs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kelllriw.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163kvggqfwz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vhpbczav.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163crahmggl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163aeytnhwj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163udviicqm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xcoouoca.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163qhsupoja.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163xhnguesk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fjtylkmf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ybyhjdia.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wpbdrqhm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nltuqxhk.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163opfokawr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bcdrqlno.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oflxpkyf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163krrptafr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ghuwiyzv.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163sfnkvrsd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163mibjxcyg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163eoyoosmv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rlmuvjek.html

Py:   if not s:
来源：http://www.aibaodan.cn/163fmfjpymr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163yohxkvpq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fncpbihx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yldttjcb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qqawtuse.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hrxklfca.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ruvcxzrg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163nhtjbjxo.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163kglxtuqz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jqlslzsf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163yoeqxher.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vgigudxk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163cqiklqvs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lwvndvpv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163kdgkaadt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163tfnjuaer.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163oikjldhl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kwisshxw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163uxbowtig.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mydnqqiy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yaqvgjpq.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163netxxcnm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gadaxyjg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163steraxvh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ezxhhrhe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163vnnugajl.html

================================================================================
来源：http://www.sxryk.cn/163lhilmook.html

F. 文件与目录
来源：http://www.xuanzx.com/163dupcegzk.html

================================================================================
来源：http://www.xuanzx.com/163hsrdedwu.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163itxouhnx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163abqkemuw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ilpjmwkp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163jhibjqgc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xtklqpkr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vdnfiwtr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163otqdxlde.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163iqhjqmum.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163htrdjqpi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qmcfkanl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ilvkpvdq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ddtaiyvi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163fnfdevjn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163msfxixwe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qylpfnjw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163jyxaupcv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163wbhevpvd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wktipzjx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163laiacyqs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rxrdwloq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163eqzxqrkt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nawtgugr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mztpcxce.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cgfojpjb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163yaleywtn.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dgatpitu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163bpqknuah.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163hynwhaoi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163iwekckyt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163frfeerhq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163oimmfpgj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zbvjycbj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163aoyqhjrh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fetluusa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163zjsrcjyc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ljbbchnb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163hmdtiqhj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163xauvxxys.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163tdmlfcjj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kftmnezw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xpasleqo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kdxppwmr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jtwdpqgh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pphoinxg.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163gicqjyqu.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xfuseumm.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xzaazqed.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mdskxgrb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uomludih.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ymhatfaz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dyrrxxym.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163fzoeduex.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163mbhigdmh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ukxltjnm.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163iwnncvup.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163prioodqq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163luwkparp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sipwfjng.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pamzqtok.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zqawlrtm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163syxwdlag.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ehrzmrvm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mcwccome.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163itefaspv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gijmdyeq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vyehfdjq.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qguegucq.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163looztbtg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163udnpgfha.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fpjlehyy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lxrpqwtz.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163kuxmwsqj.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163epakmyjz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163rpkwrkyw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xqskpwkj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163htpolmpx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qcygzwjr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gobhstay.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163wtvojmez.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zarihjwj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163eqbvkwpk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lummmsbq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wuxtdgic.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163gdpujlkw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xmfxyhbh.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163fshzzsjm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163zbsdkcrs.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163qkquoyak.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oalroouj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163awmuxrmw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163qumzamsh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jfbgmcqz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hkqebkdj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cnesydaz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fwnmtajc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oywiwfeg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hdrguyja.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gqvxxppa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163otquivjz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ffvetuie.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163aukwqtqa.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rujucdpj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ngzjkvak.html

TS:   // 同上
来源：http://www.sxryk.cn/163maustvjm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163kazwbsmr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163pqizcyml.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163epxxnfbx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163wfejilvj.html

================================================================================
来源：http://www.sxryk.cn/163qdhdrrge.html

G. 面向对象
来源：http://www.xuanzx.com/163dyvyghma.html

================================================================================
来源：http://www.xuanzx.com/163xdtfvfpq.html

[G01] 定义类
来源：http://www.xuanzx.com/163dqcdhfuk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163aioycuvk.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ghjwqcad.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rejtwogt.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163mfdilmor.html

Java: class User {}
来源：http://www.sxryk.cn/163hbnwryji.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163khmawfze.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nyzebdeo.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zuryjtsn.html


<!-- 参考信息 -->