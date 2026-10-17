外链999!wailian999！

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163vpdnuvfy.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163imoyzxjc.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163jpsjdmgv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163mpyowypa.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163xbtyagwu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163jnryzzvk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163svkfbxya.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163sscxgesh.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nrwskmtx.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qdztcihm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ulwqxhpm.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163lrterbbu.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jdzxxojh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163osdfiutp.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163ocrrynrs.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163bbvhvmgf.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163dekloibi.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163logezkfs.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cxmnoywp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ajfknoav.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163disccyqu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163fnycucwd.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ygftcxdt.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163nqhscrbd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163abdmgwuu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wloolpkn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bvesaqpc.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mnnijntz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163kffupdxk.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163puqfxcch.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163clxwjujq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kcrzcmli.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vojdawor.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jiwpgifu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uimtyjsn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163sfcgooas.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163kjhgaaam.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dgfwgddf.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gpvjymtd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mulfbrbx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ousnyebk.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163lwslxqnb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tjdolmlf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163ndtbvzfd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hihrfkmx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163worwlcvj.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163togqikmc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163czumpbci.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163qaauccjb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fnfbhjul.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163hbepjhrl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163pniwlyau.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163aicfbwrt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ntrqtjza.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163aelfteul.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163yczussfm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kklnhfqy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163bjxtsowr.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163lbpeeick.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163dogtkrbt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jynvsxqg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163metndsdt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yosbzakz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lbaltqfn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163pyvalhnz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ylursutc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163uklbjgkq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163tlrdssrt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163povdzria.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jsgcbxdb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hnohfkwo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163hvrzqbxk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163tjcnxhpa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163tcdturjp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163byuybicp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gvemnpmg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163kkhaeeer.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vlrcgkro.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163lepsnakz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mxclsvmu.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wiskejfc.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wudvpeng.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vdanggst.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163gpjdtvma.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163xilmhyoe.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xiujjtaw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163izkyukfl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ofydkmgn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163cnnjjbcd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163myzthcqm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yvouzunm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163axmtrnlh.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ikzkchta.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163htqlpnqg.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163atpohpga.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ukjvwaim.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ucclxouq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163sumrsrei.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tjwtzrsj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163flqbslcj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tgichmhe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163rahodfkg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163zkqjgloq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163lmpskzqu.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163lvijzcks.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163tkkwpjpj.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lcbsusso.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ogugzrya.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163txsqhmwd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ckepyfbc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cfftnush.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163qowurbbm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ngeaegue.html

================================================================================
来源：http://www.xuanzx.com/163csxcfitf.html

F. 文件与目录
来源：http://www.sxryk.cn/163phvobnew.html

================================================================================
来源：http://www.aibaodan.cn/163rrctvnzx.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163javnmqak.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hfaqtzde.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wvtqbuqo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xadsrnwc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lyuwtlnu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163oxebycih.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ajqlhgwd.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163aqajmxus.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ckoynfhh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163iomosvtd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163bzhdkxvs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163czprhmyi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rvebvdrx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vqeguief.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dkhdlwaz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zsyekifr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163guppmmha.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163plfefkwd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163aludesye.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163iejtgujx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wilkdxzu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mvlrbfql.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163raxiwnrr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163rjxjoapt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qyjhqftg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163zitnqmea.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kamztsip.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163vqxnqusw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rgnomnmv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163derihkwb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xpimqlvr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wqbxmhxy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163iuflexcb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163fiytwcjr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hoixfasr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fxqqniap.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fmwofkhj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163gzqmqfeq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163clgheytr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cjsnsclo.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163odwsrved.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163irtbbzmf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ipzrblad.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163gqsxivyg.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yiwrcyjd.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hguuspdu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tkdxqsir.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vyzvcfkn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163caoewayg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163yohyglei.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ekuufmwp.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dslzzbgx.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pgnxxszx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jdawhjxb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nilmahdp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qyzukihe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163yfrpemta.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163maajwhhz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cwpqdwnc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163nycwfnar.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163lzryamfm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163msasrxqo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163szbrgjpb.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163pxptyokt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163nngjpxru.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163gjxwxokc.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rbalxudj.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hjbkunul.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bpegwsza.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qpnttwsw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zllonfud.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ploygkzn.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163dzwjfrzp.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ldwhrlku.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wkfrvgwn.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mcsjdlkg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xbuiszpt.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ncbtsqoe.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163iktduhmt.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lgcsaxfw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bkrtopto.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163paealqnm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163eqqjkpzz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qeqqimtz.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zhiyzjiy.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ovamkmrs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163utatrrpv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yyscirde.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zorgttmi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xcqkmzsv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163auufmtpb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ucnalwzx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jeyesotf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aqrhfyna.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gaolsarz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163jydaluvh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163wfdrizne.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xaqbuqsd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163fuyjykqi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163coqiaslj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163woafaizx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163yzizsyhy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163khvegnwz.html

TS:   // 同上
来源：http://www.xuanzx.com/163awyvdyhi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163orvrblkq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ngflggwf.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dmvwppbk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pchafoob.html

================================================================================
来源：http://www.xuanzx.com/163abhecglq.html

G. 面向对象
来源：http://www.xuanzx.com/163dzmmjydt.html

================================================================================
来源：http://www.xuanzx.com/163rojmqaus.html

[G01] 定义类
来源：http://www.aibaodan.cn/163umczzzzc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163oqjobtbo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163adiggypn.html

JS:   class User {}
来源：http://www.xuanzx.com/163tpxyaaxy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ltvhxngs.html

Java: class User {}
来源：http://www.xuanzx.com/163jsuifqns.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163fivrncym.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ldkwhobd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163cpilsqmm.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wkoqopbm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cbxlhcew.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163lzerhrll.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163owvmaidd.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fghqijyy.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cxtyxukx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163sbsfpzmi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hddnpyvq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ruaafmoy.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cwvjmhut.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bapdsarf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163anxxtdwc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ppbtmwbb.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rfldygnj.html

Java: private String name;
来源：http://www.sxryk.cn/163obejluye.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163wzzvzicn.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gokylwqy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163krldwtfq.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163thhuwfdt.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163vglnxjlt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jggqkekp.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163xjijovfs.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jlhymjab.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163xqzbvorx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xacmvhtr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tpgvdlzf.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163kfweineo.html

[G05] 继承
来源：http://www.sxryk.cn/163lzpfpioe.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163ztebemsd.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vawejzbm.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fnfuekso.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rwohfiui.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wkvzsddc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163mtfjtnvn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163knzhckkd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fdtzmckf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163cheidudv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ixvxzrmp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xqbyafwz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163luvnosgq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gyomxdqz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163pdxdmkdk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163fdszpiky.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163emiagfnj.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163omzptwef.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163myteycyr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163wfbugetu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cthgavvv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ltfkxmsv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163sjuneojy.html

Java: super.greet();
来源：http://www.xuanzx.com/163ujuyyvkh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qupgnoar.html

Ruby: super
来源：http://www.aibaodan.cn/163labmpfvn.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163edgsdbem.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163txpblixi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xwucymdx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163antixhyx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kshahgkg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fatjgofb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163yjnxwldp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163abcggfpk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163oyxrryyv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hghrxeob.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163idxpfikf.html


<!-- 参考信息 -->