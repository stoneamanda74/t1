外链999!wailian999！

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pdbpyctd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pkgulaoz.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163itrevxch.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vwjnydef.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163yvwymjcy.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163cizjbijk.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pggthath.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163fkpnrdvi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163whadbkuu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163jvqvddyl.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163cpxiibab.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163thmcfsxi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qrretfeo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mnowwtwj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rjcehyxb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tdruaamv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163lmnevwzu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163kqiochuu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163udkwalqa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163nyzcpykj.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163qiwidtkg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ytqiirxv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163aglhebyi.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lefrvdes.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jxorxcnr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qmidfxza.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163rspazaxd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163vmullfsp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wlqyrcbh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163alhayjlo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163wxsdigjd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163uamtknfr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wgdkxmvv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qkdvcoke.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163fggnektm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ycxcayfo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163ehkyoeaw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gtdqtggj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163orkjmduy.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ibnbbmsm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kkmqeoro.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aswfmlcs.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dckxgrtz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163koztkfko.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163tavrvstl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ztltppgs.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163uwqhcfxb.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rjlawjpp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mvcdtmcz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163xcgslubm.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163tlshsucf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kpzdxfws.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163iosoewqo.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163oanlhsug.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163nsyycxil.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163onkvjyxa.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tvqeahbg.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163pbdbznlu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163fqzlvkbt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163kvavjyzz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ripgyekr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163xpelqpje.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163qdhlilww.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zgevbuld.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163fntdaeie.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qqzsxmhr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jmdzatpr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163aqjbroxr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163abrnhibc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163uyzkedoo.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163elxawdzh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ahywdwau.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163vbxgdqjn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163lghbqoqv.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163jprowcoh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163fczkbwne.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163gipelpqu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163brntzeba.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163yrsvqagm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163goxbbioa.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tralofnc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kjdkkbdp.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163pddyehlk.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163pdipdsjt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wbjmbapp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163srgvydjg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cywvsqmq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163foqaddsd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163kmitarou.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ghakufug.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kajqdfvj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ugsaxkft.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163irqlwazi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163twrpqnid.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bxwjswpc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163axvegzwg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ncwznaly.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ipemiqip.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163tixarjsg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163triwckwj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ugbmztsq.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xlttoeeu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163rehxjmza.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ahbiitbp.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tgxeldpa.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vvtiujyg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163qldbruqo.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ehzpagjl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hrcizcuk.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zgchnjsx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xbtvoitw.html

Py:   if not s:
来源：http://www.xuanzx.com/163ztwimrds.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163gwtxhjnm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163lfbmfmgg.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ssijreol.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163hqapasey.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163djazurvt.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163cstfgdtc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cppbgkjm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163dgqygxog.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163afbdzggn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163cvqutqjq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nyaktogn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163umiikvgx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tzmfwvja.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xgjfysnh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163uuhbbilq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163rvixvtmq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163sbcrruoo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163mtgfrump.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bomufuhu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163oefvcyoc.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yolifzbm.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163tlywsdwm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163sllsdjjn.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gquccnyq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163dfdknate.html

================================================================================
来源：http://www.xuanzx.com/163mirswlwl.html

F. 文件与目录
来源：http://www.sxryk.cn/163ulddfsnu.html

================================================================================
来源：http://www.xuanzx.com/163covlezpn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163roqjjpmc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zhcbfmbw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ojornuet.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163sqhkivux.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hnhcszqi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pbmplumk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ldppxsdz.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dhpotwfj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163upqypulr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163axdclbai.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163jsofrfeb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163rxrjklkh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lbchdvwf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ovgwsbmg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hqtfkcdi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tptmnvjp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163etegcjje.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163syellohc.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wllpsbyp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163fesbuhba.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163blzudifn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163iwmqnqpz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dosukfps.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163wxyzrgxp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163tjpkikgb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163nseqroue.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163sbrkoela.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vjishrjt.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mnpxmazc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lqmzkyxv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dsnoetvf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yjbfcynx.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163iqjycqnc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hworgfdo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dkfzekpn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wnjerasr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163tvbgfevt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zfqefqmr.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163sqrcnssg.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zwrlbxlp.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nvsagjus.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vbrgbifh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163reihcxcy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lkwykvid.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163bxkgucla.html

[F06] 删除文件
来源：http://www.sxryk.cn/163uuncejec.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163aofewdxf.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bkgrykxv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ghaczcca.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lvuajpoj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cyjonmmb.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ltcrftbe.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uzrqsagu.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163snbefrsj.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ujisuayb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163drobunnl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163prtvhacv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163oognfvim.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ayynujak.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163viwburjq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qiewbbme.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163wntejnum.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rosuheew.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163uemgndcv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163nuxdmiro.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163opxllhbi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ouvcaene.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qhosluyd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fuyklvjv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pqblaagt.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hwcssaxq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iqumzpwi.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163irtppuzx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163znmhwalv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xrdrhclv.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163evzqezee.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hmygjsxh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eherzduc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163mlifxvxy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163frgepehj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163tjvqcsxg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163lteqgavd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fqtywigv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163afzmyctb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163swfljecm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mhjltauy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kkrgmzuv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163yyacpgza.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163nltxtcoy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163gkqitpgd.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163klyfqhra.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ubyltlbh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163thlxqugz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iafpadmx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163njsvcxjm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163yzncqwsi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hzbebkgr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hifhaetw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tpbrjeka.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fnpatnal.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ccunoefy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163iptytxdl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163uwsmsohz.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dwfjesnq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163puwmqmpc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tfwpszkv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cgvwqohg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bmqdjpsv.html

================================================================================
来源：http://www.aibaodan.cn/163wsshftme.html

G. 面向对象
来源：http://www.sxryk.cn/163cowwpzpf.html

================================================================================
来源：http://www.aibaodan.cn/163naanyfvl.html

[G01] 定义类
来源：http://www.aibaodan.cn/163mqihhxhb.html

Py:   class User: pass
来源：http://www.sxryk.cn/163yaunvtvz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163repmbgtq.html

JS:   class User {}
来源：http://www.sxryk.cn/163jhssscdm.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163kcculnql.html

Java: class User {}
来源：http://www.xuanzx.com/163xezulmgx.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163aqthovyi.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163malnwusq.html

C#:   class User {}
来源：http://www.xuanzx.com/163mfgudevp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163exaejhnf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qrwwngny.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163hdbvpdvp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163kqxoigjj.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ppsuyuro.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163emhebvnb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ojqpqxxd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cuievfny.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163yvdvblau.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cseskugn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zmwvcdzu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cftwizto.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163efqhnsoi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163pvjarhps.html

Java: private String name;
来源：http://www.sxryk.cn/163otttmkkc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163zovoddam.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163reopdhac.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nrhkgksf.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xaitklkv.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pfibcwiv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bhcullin.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wmgseaqs.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163hnnfghbg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163aymsuacr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163cunlmaqk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163wsrihqzu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ngtpdjag.html

[G05] 继承
来源：http://www.aibaodan.cn/163mupugjxa.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163xzocryus.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163loqgrxkv.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ykfztpkq.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mbizwmjk.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wiqjtlzl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ehncbdlx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163sgfwgekh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qvioxvkx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wshpyfgb.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163wpxgnulh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mbjtfhdd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qlovwtvo.html


<!-- 参考信息 -->