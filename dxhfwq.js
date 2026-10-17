外链999!wailian999！

[E06] 替换子串
来源：http://www.xuanzx.com/163axyajdgl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163yquichnz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163odorlvjq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ivgsvqxr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rdnizxmr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ysxntyxu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163btdhbcju.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163pluivgjq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pxkijksj.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163kwenuegw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163nfvshdhg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ffgwaegw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163hahxiyxt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ppmmbarv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163azvppuba.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jtfyebvn.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163aldnzfql.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pmhhashc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163shzqwswp.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163iktmwbbh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163agdqrznt.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163punykblf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163exotqdjl.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163jttznxit.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vgkmjssq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mlbmunab.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163evfqvecj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163horkojiv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163tprwsbft.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163rsjszrlo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163ndjwkfue.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mlelzwim.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163slprocub.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ulgbdiyd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163udcwmclm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163yicnxiar.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pyyisjvg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163iixtuiip.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163edgeoyzb.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jxckszwm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163iymftfkf.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163npllopuc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tnymacff.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lpldiduh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pxuywqsb.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wbcegned.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163tyvzadzp.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qwvguxdh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wwvyyxya.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ktwprrlo.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nhrbuexe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163mzmuovaj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163kojuwmmp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nhqacmfk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163njnfmhrv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163eadlwlkq.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163bcixwizk.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xdhefbbu.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163einwzfbo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nsrncixj.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dcwzisce.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163gudqltnd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163fcjvibmh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163miputlzt.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163afdlaeda.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ivjpxyyz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cauhjkqx.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nvkyxqfm.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163bkulqjcy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ezpbpily.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163hvcgerml.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163hlfquxag.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163dbcgaorv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163brynxnab.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163relobxhb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163llqfgoli.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163pcfgbidj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163sapppojp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sofiswzh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vpsywhwo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163nnjxuhrd.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163eivkaooo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163qihdgzbz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163gefzjnrr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163muxktacd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pokesfit.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163umorqxyj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ccuwdzsm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163uhlpvows.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163akqucyno.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163wtjxwsih.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163auelcmex.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163eytlakbn.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vuukpmhi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ispisvco.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163uygttrio.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ymyeiwjj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163zbpkfmgq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bmtoxroj.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vsxwxgka.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ixwolgmj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163nvcqtlhn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gswfjnpi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163yxvaudrs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ueiseikg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163nfefsfpx.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gdtapbuy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163jutmneba.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163jxontdvl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kksgnngn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xamxahps.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nobyjguw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163snturdtm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tmnqwobr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163vvxbwuql.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nnmovsto.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gnxcrvji.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163rsvzarkz.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zmpkiyxk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163akzqojgt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163cpfysmmz.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zabpxymr.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rhygcmps.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yklscwls.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ffrgssnj.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wdktmhts.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qlfigwqf.html

Py:   if not s:
来源：http://www.xuanzx.com/163cqfzwnxa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xehmprhp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kgfubbmy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163dxlafuhh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163nppsbbkk.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tgrkurfa.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163snjadoam.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tvudntlg.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163txeyqbco.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163zonoqrsb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zwfikpwt.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tsneobxs.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vzewjqfp.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163photpwep.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fpwwikjx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163plgxfmzm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163gbviumkg.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163uldtnbmk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jcgtktpr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tlbejahv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qvioieqy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163lccrfzlx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ivuycdcg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163onhozere.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163lbsebwce.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163bpkgbnpj.html

================================================================================
来源：http://www.sxryk.cn/163hrjgitbm.html

F. 文件与目录
来源：http://www.sxryk.cn/163fpsmdhzj.html

================================================================================
来源：http://www.aibaodan.cn/163pclqqvwp.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pdetqfap.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cafevllb.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fxywwltx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163omkcllnw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163pqqflldz.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iglbszyf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zsvlgehr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163qaxqvczn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dqnuoupl.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tiptcyvt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ccfselid.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ttvqzvng.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163goiznzar.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163zqdspryp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ctnexabg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rwkeznca.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163albolzwz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163tnmxnnuc.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163omtoxezs.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ymexrvan.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163cqhkrkxs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rqmnrdlx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hlzymgxj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163oiuqjitw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163pzejbton.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163aqjvpcwi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jyayacur.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163igdipnop.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163sbcmsger.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rkswnhwn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fltxhvew.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sapzecht.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jwfwxjil.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163gvqwpbqe.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163mnjrihkb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163yvghfnbt.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wtxazdfo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163muufrgmf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qpafqjod.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uozynjtl.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rnwxvept.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gjdbcyaz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qdbimcsk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qcmwxjxl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rqggxvea.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ioywrvum.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hfkuhdtd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yxapnvdo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xobweksb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yyovjjai.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ntgzhbus.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163gowtpyzm.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163cayhgugw.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163leoyoznu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ylgwvrtt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163koaualcj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kmfpocsp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163popwlify.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xyfacoju.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163aygezuuf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163pjtwdglz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163mgulrqod.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163qgvqzhwt.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163splkvwtq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pmbsvwam.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mrbusstm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ckodqgbh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sreeoepe.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163pycbmnad.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pemrnpsn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163oaktoddw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hqxdpovf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163joeepgvs.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ilpffkzq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wrwotkcy.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ldspmwjk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mygxfoea.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uhqwsooa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zmetebhb.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gaergpbu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hyibwjvc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163pljulbzu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tsrmflcv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163azaajfcm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nrawayri.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vbyecndx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163pqiafdlx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ibpawgxs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hmbijeyq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yhgztaiv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ojmxehfp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hryneteg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vjgqjjbr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vnaindms.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nlzdizeh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163sakflnwc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163shjqgbxd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jnuilmpx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bkqkbtdu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ioqprnsj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163omlkpzuw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hegpqgfi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163sizdgats.html

TS:   // 同上
来源：http://www.aibaodan.cn/163aprfjbcw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zzygryjd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163nlccoatd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163zvevqxwr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jrziebwb.html

================================================================================
来源：http://www.xuanzx.com/163zusymrnw.html

G. 面向对象
来源：http://www.xuanzx.com/163vlfxprzg.html

================================================================================
来源：http://www.xuanzx.com/163lopcovcl.html

[G01] 定义类
来源：http://www.sxryk.cn/163wkmwqzow.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fxjkgljp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jdfotxcq.html

JS:   class User {}
来源：http://www.xuanzx.com/163nkliinou.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163pprftgnk.html

Java: class User {}
来源：http://www.sxryk.cn/163jfzjaexf.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163lbvfjrig.html

Ruby: class User; end
来源：http://www.sxryk.cn/163ekfhkweb.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hrytbvvy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163omiiesfh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jfjlkzqv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163onytmtfe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bxbgvghw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kdfmwqfi.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zupgipsq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163axrblcjq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jamknozb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mgpdxxyi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163izfblsoi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mejompkh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163setfmoao.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kfyluxan.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cszowsbj.html

Java: private String name;
来源：http://www.aibaodan.cn/163deqnrbdf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cquyxulb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163gscxxasb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163aymuksue.html

[G04] 定义方法
来源：http://www.xuanzx.com/163scadwlwo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wszcinal.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sxgcfadk.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zttynzqm.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163twnkdemy.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rydkjswe.html


<!-- 参考信息 -->