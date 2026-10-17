外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163skawjhhp.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163lhikayxc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tyadfvhk.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163bcsgmdht.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163qlduyscz.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ncioiwuc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ieewklyg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163tsejufed.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nmfkvnml.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163abkmozoy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kgfvxzmy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ypvpchuw.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163sbjcafga.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qbqwzshq.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mfcbdnst.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163qqevrzua.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163njzbqzhu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tcjsakkd.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iyktzlef.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jazhworl.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163naxqvcbf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xuynpwvu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163sczwvggh.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163wuxdokrs.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163rafwofcs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163oqwtbvuy.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163epudjrnl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gqagzrhu.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163azgljbbi.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mecbmmho.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pxszwdbm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163psbosdlv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wwvqmwxc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163zbfiadlt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163brvixonk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qutfqocj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ljdggqvc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163okjwtlvh.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163yufvwenx.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lqmvwdhw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ysfifpkt.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163zamutecg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163mgjygweu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ciwqbogd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163efovwfzx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163vawisjwy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hcjupczf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163gqxryskc.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163esffbqdu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163tapqrvxw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163exdwzfan.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kdkuzehi.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kmvixobl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ssksmisd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hfbjmduu.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163qjmhwllj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163gxhneznl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163hzaxeffp.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163azaxpmeu.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163lhzmxwsr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gzumerlx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163emjlgczo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nsrivrdz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163waruyvmx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163mzrznmxs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163lfthjzso.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xpofeeaj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163lcgpnrpq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163plcsxbwk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163krhdoxbj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fmoadjix.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163abhanghm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163fozsoemg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ilhwmekq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xpziezyp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163toilswgi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ujuewyft.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163wrxkgcao.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163dhtuogru.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lvfmbjbl.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ovjqgsgr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jlmtyjli.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ybtzfati.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qnxqfldj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163fdnqzpih.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163hjyqhzye.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lwmsvvaz.html

Py:   if not s:
来源：http://www.xuanzx.com/163ksyakouz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163spmfehns.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rjgxgbra.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163oubckbzs.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163brboiqhn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mgjpobdf.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163jlscmddr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163xmuyzoui.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163meoozlze.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lxjntsmj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xlixaodk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vgfviihm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hiaxzxhe.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hxtvbhli.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ugktydpe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163wbbvzmgi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ajwotbib.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163djxwecyg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163bmmbtfre.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hnwsfvio.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163olfgudhp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163soanvppo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163sakhndob.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163juttnlis.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jakejfnc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163hmwalyyn.html

================================================================================
来源：http://www.aibaodan.cn/163fhghtlhm.html

F. 文件与目录
来源：http://www.aibaodan.cn/163igjamlwd.html

================================================================================
来源：http://www.sxryk.cn/163ydcwmurz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163obaolavu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hftskwzi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ufickhlp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163dzwdrgxk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jahbjxfm.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163czbdnvto.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163vssqdybw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ipsteotc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pymdiwav.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zkfqjkuf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fcxrsvsy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bdckawlw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cgcjovky.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qlinercw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qpcmveph.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rpcxtneu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163sjepscxl.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ehcmymjq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ekbowxmh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163oquhromj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163izyzhbul.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163uowclbte.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yznsdbnn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163soabifyw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163qgeqxcxl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163etjyiovn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163rclujuht.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163filxwrli.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kpqejoub.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163uxdksfbx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pyetlvno.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163sbptryhw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163wujuaucs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yqtzcqrs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163wxreuxkd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kavawinl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zsprdeie.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163monpxjch.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163uqavrygo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ggbdfoih.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163aqsarhce.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163seroplze.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163bqznodnh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163gtlatqby.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163gdhibnxr.html

[F06] 删除文件
来源：http://www.xuanzx.com/163uvwubfus.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163umksphuq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163gjexceab.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pafuitcs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163stfxrmcq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ubtadfoo.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zrndfhbn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163qzaosaes.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qkucdgpx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163tramlmuj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kqkyvlrr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ryzbeyqm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kbwqatts.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lghclknt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wvhzcnak.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163nvqjuixe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qwbdsxnx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wlbtlolu.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163iesudvwa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tpqflypp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163jktjprfe.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ghiafjus.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163czqzaeby.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zfkcpomp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163kbwjkfcx.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163oyoasxcf.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163radrpwls.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163pvfpljnf.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zmckirlt.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bvbbjhfi.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ohlgaatn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gnnjiaoe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163txwiubno.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163noszkkwk.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163plgckeci.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vzugicjq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qneuhois.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pfgomwol.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163havszqix.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vnjjcuwb.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163cepvhmhr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rpxvygsj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pkvzgeid.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tjfrkpho.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wurjingv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qgolrwps.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sqxuqnvk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ogrfgupt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163whfdbpnq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cchjagrv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163khiwotti.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163edoqooiv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cvhiefiv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hbpfnech.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wsaceubc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wbamsyru.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vygcojja.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163kfffceun.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cstsnwyc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zhttnjrx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163znukmwar.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163iplaxmef.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uzknmcno.html

================================================================================
来源：http://www.aibaodan.cn/163hdvwqnjm.html

G. 面向对象
来源：http://www.sxryk.cn/163qucenzwj.html

================================================================================
来源：http://www.xuanzx.com/163rflrztvz.html

[G01] 定义类
来源：http://www.xuanzx.com/163gxzuqnhb.html

Py:   class User: pass
来源：http://www.xuanzx.com/163aeevujmu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cvpetubl.html

JS:   class User {}
来源：http://www.sxryk.cn/163comyshsj.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xwmrbylp.html

Java: class User {}
来源：http://www.xuanzx.com/163hruewadc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163opzsijuz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163rzvxhile.html

C#:   class User {}
来源：http://www.sxryk.cn/163omzdqnah.html

[G02] 构造函数
来源：http://www.xuanzx.com/163zmkmenry.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wsskthzu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wuomjdlj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163anrwrfvd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yptsrbvl.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mhlxpjzx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163wzyibcxx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gpswrnsf.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ehjfzgtk.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163brtwflcu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163oejivkvi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qhcnzcrl.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163itntlwuw.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163pxctzyiy.html

Java: private String name;
来源：http://www.sxryk.cn/163bcwyifjq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163mzpzeubd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163pnrqneyx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uvodlnoj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163lgzuofjg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163axqtmamj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nnbaoqjd.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hhkwerhj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163onooywxc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163culydbtt.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fjxhahmn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ynniswzs.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163jabasefz.html

[G05] 继承
来源：http://www.sxryk.cn/163ogbwynif.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hnamgtyy.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163orphkpfa.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163owknuzfc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yzkvaoha.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163ruhizhep.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xjtohufd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163pyeyflva.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ubxztysm.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mzrkqfcb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163estdsfmd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163emtjsmdf.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hyfwlohf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163itvlyrnx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vusztmnf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zvmztbts.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163jvtgtucj.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ptqquzks.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163pabijofp.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163lwjithai.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xlgzfqdj.html

JS:   super.greet();
来源：http://www.sxryk.cn/163luadludz.html

TS:   super.greet();
来源：http://www.sxryk.cn/163lrtpvdmo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163eqjaghua.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163lrfalrex.html

Ruby: super
来源：http://www.sxryk.cn/163lqgqeemp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ppmjdyfb.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ncviqmpn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163uovfmfid.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ptcnzgqx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nlmygqwe.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163uxycwdug.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mcuxcrge.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163isgqgofn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163rnjnaino.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163gcixxqoh.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sovfpkxv.html


<!-- 参考信息 -->