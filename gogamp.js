外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163seeworcd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ejzfvtpl.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hwuhlvbs.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163dhefdnxl.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rgblkbzd.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wdsljrxe.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163veutldtu.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zhhqpywf.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163pgkhlphz.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163apprcfpw.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163vpstyshb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vhrhblrz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163eqnteyts.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zrhmldwv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163oqgazslj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cxrtygmy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163unlcqzlo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163auarmgmg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163qrpwaydg.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163getmgibb.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163iauxuztz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163mauchfzy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ojctlzgu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eowsrlkh.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zclkgonf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zmtoewad.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163yljbkckk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163fqbibtgq.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zajeblja.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163afmbnofi.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163klkcgftx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rbrxzgib.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lpzfdxdk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ylwlanbg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163ziykvsqm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ogmyijxb.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163gpahpfbs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gwlurcaw.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lfrwlfml.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qwytyspp.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163nmftnqvn.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uapdagww.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rvboctbq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163bkkrowmf.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163hvjbxars.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163myemvhxb.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rvejfuog.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163igfcvoxk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163vzvmrocd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163eztjkpgi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163cmagvwns.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163wbtkadqe.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ceyzkxxl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163edoyizta.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lhbeyomk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163swokviwc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163knipxsch.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hoiastdv.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163dmdxfbga.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qspjlsxt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163wghkwhqj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163snzyassk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163wkaqbfjx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163eyzlkdzb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163hkyaczyg.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163lfwzlazj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ooatcbhw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163shwelgig.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163tfbyxdbo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163lrqjzpfs.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163gujkscry.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fphfeyfp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163fhmlvywn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163pdezopyv.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dteojafk.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163isnpnxky.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163pvafemos.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zdxwyiws.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163gznxgywp.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163ptiihprz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163hzvddxql.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yoqlozql.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163pfmhhtpn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ageuufaz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mqberbib.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ckarnpdj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163nlklligf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eiunabxf.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163eulpuwoa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163yuvohjcu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ruibfeye.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163drvvpoyf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163tmclgsfd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163vwvulxjp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163thwptkfx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ealzfben.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fouasjys.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163biolwjbl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163utqtdhry.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qmfdoxkj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jcdukvkp.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163sxnlbfue.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ugsektaj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163qhvqbfrt.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hwfqlura.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163duxquury.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163pxlmqwoo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163uvzkpjag.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ljktrsqs.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163tbrabwzb.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163mzentikf.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sukumrpw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nwewunib.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ckhditjs.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163hrwgrjds.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163xccbkmnq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163wvgdxiuw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nvywkgdt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163ayavhqbc.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163mcbpadof.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mkdncyxs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ulyowckj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ccvgxzwr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hgcnexiv.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xblckztg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163oowxuuzs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163gqzuyevc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163kmypyxou.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163surocoea.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163lbqwenzu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163azignbrg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163esskfvxg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bcqsdcri.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163tgfvqbay.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163rqtkuamd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163yinakpkq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rnzqsixw.html

================================================================================
来源：http://www.aibaodan.cn/163euzrtfjz.html

F. 文件与目录
来源：http://www.aibaodan.cn/163amaqopnw.html

================================================================================
来源：http://www.sxryk.cn/163hohkwxly.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qpkofmfq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zogfhsdp.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oikjkayb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163tdacfixn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ozyyyifa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gojevuyi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163cumrvkvp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163mykmcgxi.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163slvgwtak.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163osfprjaq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fvvjtlyx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ycfwjhon.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tczogcqe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163frgnlbol.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oqxnscjm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ppnuvyss.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ifvwsydz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163zvoeaftc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ookgrlrh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dshqegiq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qounprai.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cgcjrbcu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zhfnnasr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ifrnqbeg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mfdtctoy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163swccgzue.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dhtzfwhl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163juqtlqtd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nukqbviz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xtzwzaex.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rxjytgmj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dbafdqyw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ojgromvq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163jfioregt.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163jrguxwrt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163outawobj.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163kmtsiukb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163olzetyoz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163epalwmyv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qjjwugjn.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mnwmnxml.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ywkkjzzd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163phqldvas.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dnuhwngd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zskunrma.html

[F06] 删除文件
来源：http://www.xuanzx.com/163qacekbpb.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mzznxfhc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163gkccpxoz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qxrlgeya.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zwvpzbdw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xvgzqdex.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163kkibnjpj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163whroyrqt.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ksesmipe.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tmnwdogt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163etorljmr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163hqrqcfmp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lffpddaq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wwpfyiwd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163dkelvayb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ewezchfu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163usdqctog.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zgsflsxu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qgsbejrd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ndukinxg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163meavrbnr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163oonfenzr.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163potgpuiq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ibexnlck.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163exvwecmp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163bklgqmgv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163bgxxsovt.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vfnrehtz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163kojvuqvt.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163tbdwwhyn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mvzxuogl.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dchtbpgu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ezvwhnxm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163dsxaxlcs.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ajcsxphm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163swqwsqun.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163mwxethbk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pwvdodkb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lvqlzogw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eujeeodr.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163iwclxvpy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ynggclou.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163grhkzfzv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sqndguch.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qbavvjat.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wdsevbyx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163alrtixsw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xbcliztq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hrhzaius.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xlmhwvnx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163nwhyszfv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wfszblup.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kqpwisjr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163nwencxyt.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163juntwzrm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163uwewyfrr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163dsazjimi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rvgpaurn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163eeffkqjn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163fkyguukk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163whfaotnu.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163zbjuczvl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163iwvoxgzr.html

================================================================================
来源：http://www.aibaodan.cn/163erlykguf.html

G. 面向对象
来源：http://www.sxryk.cn/163krffvois.html

================================================================================
来源：http://www.aibaodan.cn/163nkjfsvnd.html

[G01] 定义类
来源：http://www.sxryk.cn/163rbfpykxo.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tlvygxlq.html

PHP:  class User {}
来源：http://www.sxryk.cn/163pxmmtxjj.html

JS:   class User {}
来源：http://www.sxryk.cn/163qzfqhpls.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163shnpdiqe.html

Java: class User {}
来源：http://www.xuanzx.com/163botdgfkk.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163qvabbxvw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xxsijbyv.html

C#:   class User {}
来源：http://www.sxryk.cn/163evwfhbsf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wskvctki.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163yscpfqaq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ukumbjrp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vrnrmtvq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ropwodpu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163rqxabnsn.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163kvbgzuoy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163rlkjbkec.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vidalcym.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qeysdujs.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163frkddhfn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ycvuujhi.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163plrnhxrm.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mnhejell.html

Java: private String name;
来源：http://www.aibaodan.cn/163beqerlsp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163dnzicqqz.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vtaengxw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bgnewttw.html

[G04] 定义方法
来源：http://www.xuanzx.com/163iemmwxqn.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lrwieywv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tdysoyor.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vcjkrvzo.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163sxmwrcag.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163vdemcatn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163bmeapria.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vgzfsbaq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163phttybou.html

[G05] 继承
来源：http://www.xuanzx.com/163fkftxnpy.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163xlvdeeoj.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ikyzheld.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bgqssgwq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163oifnxezw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zlxkkpwl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rpexkgyj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163gbcsaajq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qkqpccia.html

[G06] 重写方法
来源：http://www.xuanzx.com/163cwfvvmng.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163doqfllph.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hgkpmwdf.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163rwjgprtc.html


<!-- 参考信息 -->