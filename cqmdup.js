外链999!wailian999！

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nepvdxnd.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163irytnpfq.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163auejpbgd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163tbpgddnn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163xvwuhwgb.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163inwftyeh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163wpcmziga.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163cqdxmoqj.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163gookodzw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ipqwriul.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lmfefkop.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xlvvwcqy.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tobiktio.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ewvzhvrr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163knnwnuyu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bwjrkxbg.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163elgnnngy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163drnctnqd.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163lsvaxzpm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rklpkamt.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pwgcckto.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yetldiqj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bstnqofw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163onjgwaks.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163gkcuvywc.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163kjuiyemh.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163iqcxtrxt.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163vbidsgit.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ktmjcwxt.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163svrqqnqn.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163uaysfmss.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jglcnlyj.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ugnmtzbm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ezcchspc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163watqgylq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vdtlfzmb.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163lyccffdw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163glnqpgkh.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163wklyuwut.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163dblfttpx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bmhwulpm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vrygnihq.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163itlsfpvx.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163kivtputw.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pftfhmvy.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zoxbknfd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163htocbtpy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zwxjkirc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163vpledznc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vxxyjxod.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ghuozute.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163wufqumgv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lqvhqvji.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dpfteybr.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zwnzzhsc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163jmptkuvf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ceheyafe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163rbfpgxkn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163pjylzwwd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163iquqikne.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lrcmjkzp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163nnbjpjzs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163dxonosbh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gnceypma.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ilfnjdcy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163gfefdggf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163yyuustjs.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163lzfozidd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163iovovkjx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163ocdridmz.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qoqebgww.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163qgyskrhf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163danlwibr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ppgeoffd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163yeegxuuc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fvaabcby.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163ubsmvtsp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163oeqymgzy.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ksnaewhk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wchcleks.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163wduwywwj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gejxbegj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163tyjordwr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pvbhozvv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rvdtmlox.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163zunsccxh.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163fakgdxnx.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163vmldlquu.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163vcgahfob.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163yuxgpiwt.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163kmalvbbf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cyuuqqtx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hjotrulk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163azfnyjsd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163uurvkxoh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xkadwlpf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qyoqgppy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mcwfxjpv.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hlyssgtx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163udlbfetq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ynkpbbdf.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xabffewo.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163siiovjlf.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gtwykayz.html

Ruby: s.lines
来源：http://www.xuanzx.com/163llhylyok.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ezyzxecf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163gqhhppqf.html

Py:   if not s:
来源：http://www.xuanzx.com/163sjfkzcyf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163scvptsle.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163iigufqea.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163pjszyyka.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163okmuxesx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163eypdmjrr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163pvyeosgn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163cbqiadap.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ndkkfbxj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163pttjguhj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163gsbuzuoa.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zyssjcba.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nexwmvaz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gbfacouc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fonnfrlk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ckhyrqnq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163hufvuuwo.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163lwgttdtx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163lwzmhrai.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dhbanczi.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zswmplfw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163irelhrez.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163glasipvz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163aovfvvkr.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163uprniwsp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163rmmvfxih.html

================================================================================
来源：http://www.aibaodan.cn/163zjlratis.html

F. 文件与目录
来源：http://www.xuanzx.com/163wuktyhak.html

================================================================================
来源：http://www.xuanzx.com/163dhzhhsmz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ositkyzy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163lopwrrwg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163gkbqytey.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ynjwlfog.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163poshjqjv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nizjsgjw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163txlbmmzx.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ulrexqnu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hugvgfzn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163neupmuwk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163qdenxgat.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163cefqtyiv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163scejseoe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fzcskpgj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ftxxconu.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163korhcbic.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hvjvdzxl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163dsknfuwz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163awfyrpna.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163utleznex.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163fjgnjcxn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hhxiuxak.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lsaxpvdz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ufnxrktl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ibbakdze.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zisjqyaw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163oczcpdai.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163emaeaheq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dhqpwsia.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163qymcndyj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vwxpzozt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ycfoxqkf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ilerkuyg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163byrtjzcu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163axebudxg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163hsitfpwk.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163junxhzrc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163qtogogde.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yvwfrllz.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dmirudsx.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163njuzvlmj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163aimwhxma.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163zfuvrilr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163spssomxl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163zbvlborb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163utcgxnzi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xgcndwrg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163eizzpidi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kqxflpsq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ydhendss.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tlzrdyke.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lrglptpf.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163cvxqyapg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163irpqdlae.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163weyqefht.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163adjlzrnj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163cjasdhwv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kjecwjaw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163aypftbfx.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xlkkcjyk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163yalvidge.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163gavclpjr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163imlwwodb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hprydpbu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gcvwwcbc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163ixdoymxi.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163npfcjrkc.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163odrutumr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kxqkoocm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163nwmdtmtn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lxldtihr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163tdbqmyzt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163pefwesws.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qwbbsvvc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uwuuoejy.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ewzstfha.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xavrznfb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163todjbxmj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163zmvxuwtw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163guonrkhj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163eisjmkhe.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163unbluuwe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163grxeeezc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wjkphavo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hacqjsgc.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163ohkxqcbh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bdachrdb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163avglavjg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qbpdunxp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163vsxmigic.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163gdrdsdgi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jsgvirzo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mbascsjc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163amplhrox.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nylohfjb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dtbzsdcp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163sfkjtdtv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163huhucist.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tqvmgkjs.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jwofylmr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163fngmvpgl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hdxdhzcq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163smjhaaig.html

TS:   // 同上
来源：http://www.sxryk.cn/163tjworyfj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hmuvjtuc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ztlmhtsy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163udhcuzot.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163yfmyeojr.html

================================================================================
来源：http://www.aibaodan.cn/163yzhxcrpp.html

G. 面向对象
来源：http://www.sxryk.cn/163fktsrvif.html

================================================================================
来源：http://www.sxryk.cn/163mrefqhhu.html

[G01] 定义类
来源：http://www.xuanzx.com/163hdcromew.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gokpiadg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xzvtsnfh.html

JS:   class User {}
来源：http://www.sxryk.cn/163vkqjriua.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163yuyyvhbw.html

Java: class User {}
来源：http://www.xuanzx.com/163dlggxlei.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kiaciiir.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163tjvhgxrh.html

C#:   class User {}
来源：http://www.sxryk.cn/163zworyptq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163bfrhzdmm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tfwiuiju.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163temkxtyc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zxizubcs.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163iusojlni.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nqbkosmi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163chulwbls.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163kviyzjds.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qbglepyi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163uqsqhfvi.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uxorfsif.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163laytuzmv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163eizjavog.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ddaxtsqv.html

Java: private String name;
来源：http://www.aibaodan.cn/163rksqszzo.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163arffhwqq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cibsqgoh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163qtdcxglk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ewzvpqoz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vcaebeig.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ikseyfik.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163gmcsflir.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163tyokhltb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163sevszhqy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ezvprkrn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163vsewaccn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163lyzztghc.html

[G05] 继承
来源：http://www.aibaodan.cn/163bkcnfdbr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ricetfmb.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163noebljlf.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163fmglrmps.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ojfuxaaa.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163licntxxk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163cvowfuhr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163woiivsxk.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xwohcobx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163htvpexij.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ovevdcdh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iaomkkms.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163bntlmvaq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163uxsgoxno.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ebmiixcz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163vjzzpffd.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163yjoykfdd.html


<!-- 参考信息 -->