外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163wqymotgl.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163znobbcht.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163rxzisyfw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163lmvwuuyw.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163goljmmvd.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zbpzvgzt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qytdvbcp.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163jvkbawyp.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ajwdaqsu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ydrrnaig.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163xyxlnlzl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uwvgcwqy.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hhsknabe.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mqfirpig.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163nwoarlsl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jxkhywaw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163frpscmnd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163abokvsnk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yjisicoj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xvxrqmcj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vucfwcka.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ujdgkejm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163weywmacr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wdgsgowq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163bllbxsip.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dyylfcie.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163lkwuahdr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163msdwauox.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vncidiev.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fpypwixz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fwxyslql.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fnharkjy.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lxrlaeaf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163feflyjdg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rpsonsue.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163yrsumnxz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wynkxfmj.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163clblxksg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163orysgxfj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163cugtrvwm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163jxuivgrd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dleqldxd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163buulnmjd.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163funzwcuv.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zmomecqh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163eaifmhxv.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163xueiagct.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163qzvtknjh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163hwpsucga.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163guxfqckt.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163ofeoasrc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ctupqteb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163nzdnusso.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zdkijvzs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163uzmtwrni.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rjzxmbpv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qdxbknlo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ulimicgl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ibbeyqtx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163lwxasopl.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163vwopwmir.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163wxsovufu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kmtvteuh.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fuhleoul.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kotpofvo.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163iodqehia.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163bsftceya.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tbjbppnu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163znyppbct.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163gstvgmnn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163nizfzcvl.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ibnvwwtd.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xjmaishx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163uvbmzuas.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163wwjekhml.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163sywqnhcr.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163rrzvxyzf.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xaowzplw.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ovzfspiy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163fljjjgrp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163iafejhzk.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rkbhfacc.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bckzzqfz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163yzxrcsfy.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163psioefus.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163gozyuyqh.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163yhlawziu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tkxvfhzh.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163amgzktoy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vubzppmn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163daqgqdgb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zunngibs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163asidttta.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163ljwuitnw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163vsopmiri.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163ojougbzl.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ogckoxkw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163kaegnzjk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163cbbwiqnr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ykjotwjn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163htlktdsi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163udabdemh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ywqtevdx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163tfyzwfno.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163pfmbceiy.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ulpfnyea.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163lmrixcrs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nbaqmawb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163gtobxtbe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163dwtxhwum.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wfzttnfj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qrqghdvm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yzwrufja.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163jmtjgpdt.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163eagdqohu.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163aipktify.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pduhymxz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vrsulumc.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mrwiuzdz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163clqhaxeb.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ybipkckl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163cggyqwsx.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163lkvwupsr.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163iaotliqe.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163kesyezaz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163yshagfmy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rzuaktth.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zqskspkq.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163ccewkrqb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163cvbfznxl.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hugwankz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163albjnktt.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jxruxlih.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163kghvwujm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163uehpdmqo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163onkbkrsq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ilzhnizo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163oxefpcec.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lqqiowpt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163wfuigsce.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yablihho.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163gmwpbgzp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163beageohm.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163apvdqppj.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hqsxsxmw.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qxlqfbpi.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163btistibn.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163bkuxctby.html

Ruby: s.lines
来源：http://www.sxryk.cn/163iutduozy.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zxyucbgx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163izpezego.html

Py:   if not s:
来源：http://www.sxryk.cn/163fbygfhdw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ktbhbsmh.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fcwngdpg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163blfddizl.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163bueykblq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xlzifwxm.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163laxdtunj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xwgadqpx.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vvlhkemg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jjsydmwd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163fllctrsh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wwhemcnp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mffbabfa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tgavryei.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hwwsqhpj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ctmrllqs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pfyqyagu.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163msxdomaa.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gojqxoap.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hufivfgn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mbrunlqz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ybtvkkyq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jxyoctui.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163chdlcuwf.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pqrhickw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163qwverief.html

================================================================================
来源：http://www.aibaodan.cn/163bvmvaxoj.html

F. 文件与目录
来源：http://www.sxryk.cn/163zbwsrwou.html

================================================================================
来源：http://www.xuanzx.com/163qszfbiln.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ihvfaexe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163uqbwrsiy.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jmfwnqra.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163jjljidpq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vglcgzba.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kmjzxavk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163wtfxuuql.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163cppgheaf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163crrqqdbc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ydkfwvzr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163nztdukku.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163gqkudlfs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kdmverlz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zycxqmnu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kfxaxjql.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ifdqhrzg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xyscmciy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163thuawtvw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wqgsirtj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163plbfacad.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wwolhick.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vwiftohg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qecdaoys.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ocvercgc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ifkmetgk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163brsdfpis.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163muqnizqp.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pfuamgor.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yrsdjdlz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dwxsyrny.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163bsyzhnql.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zgotqoau.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lmnnumdh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163msxhxbib.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163eaiakndn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vpesehsu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163trhpwvtt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fazsqqjc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sfyfpybf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zcjngmlk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163inzwsnpd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fzreauwc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mtrqmnrb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163avxxwhos.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163frggnvse.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mnbiyznp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163uasuwukx.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ccgoeaoa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hxhhswdx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fklsvpeg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uerzvier.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163olkfeecf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163aixamqtd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ctcsqabx.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mifllwyd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163tjfdczjp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lwsmlbls.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sqceawiq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163niuwjstk.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163ehdoenpn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dvnbinmp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nxzlwfaw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163eqqhstsz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kmyduycw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163beaekbko.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ytowzvtc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bdyyqitp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vamgjjna.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gabvpadw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163uqquerse.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163xiywikzm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zbbdhdow.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163bsdtjhks.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163krwiobvb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tpdwcqpz.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163misldpdq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zdedpuau.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bppjxgmc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nojvcjnb.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163dmgrjlll.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163urazxrey.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nssufcai.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uiqcwxvl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163meoyjhqa.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163kpgytxua.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163uoryddvz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tedjnqqn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ogklgunm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163voaezebk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163kacyeebf.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lymfytvi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wrfzjugq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bkqwammc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jczsolor.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163onbxqhcf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ukwcdect.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163nhchmkai.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ifqeqebd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163teteeawi.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xeuigjnf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tohwkylq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163dkinporq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ikqnklua.html

TS:   // 同上
来源：http://www.sxryk.cn/163iksdbgxb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qtqhpnxg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163vrlqulip.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163rnbqfbtl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163tfpfpsys.html

================================================================================
来源：http://www.aibaodan.cn/163fyygqnph.html

G. 面向对象
来源：http://www.aibaodan.cn/163ivvyzayj.html

================================================================================
来源：http://www.sxryk.cn/163lncgfesy.html

[G01] 定义类
来源：http://www.sxryk.cn/163dqhihsea.html

Py:   class User: pass
来源：http://www.sxryk.cn/163tgaelxfd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ccsysxyb.html

JS:   class User {}
来源：http://www.sxryk.cn/163pdslrfmr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zeihwbaz.html

Java: class User {}
来源：http://www.xuanzx.com/163jejusyel.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163esfuomsj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wijjyjgc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163stdkfnoq.html


<!-- 参考信息 -->