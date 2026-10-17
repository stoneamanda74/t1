外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hytazece.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lzpizhpv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163opwbcakp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163gnvwjdhb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163fmfefaui.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wgzrvbms.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163axlbgpyp.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163hcqristd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163alkfherf.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163pzhcpawu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163qgiwbens.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ganmxhel.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163iidnrxrl.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163toqahhzu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163mfgzndlk.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163ewnqdsku.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163llgkodds.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163aaqbgobu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qtitxqwi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163smkbdnwo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163mjjxblke.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163dpamgcad.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163amnipipn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mviankot.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wcvjpbaf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ivljcisw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163mrqkabso.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163shwuxazv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vyittqyp.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lhenpzoj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163cfzkkips.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163emkjbjat.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163llddxzui.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zlhwqbrt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163yjftfohr.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163aotjhfum.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ckztmuja.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163jvbkkyvv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hcmidmst.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jrjgnfoq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163gcudiiat.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163mxcgcoeh.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bpulzspf.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cuekjccv.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163waieqxju.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hqapksxp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zitlqzht.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wpevcbbz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163iijthrpm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ycpilaru.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xiojvrco.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ugpjyvrx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163sgxbtcjo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163znmblygl.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xuksbkmu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sqblvdku.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163tdwpxqav.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163bwkmvide.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gfpgyxld.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bkdmrmqq.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qdvocabw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163gnzxpjay.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163rbkwssls.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jedusmlj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163pvstcrla.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163zxvhlvzs.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lheyyblp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yvdmcjen.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163nvhzynkx.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lgjzvith.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wqubcxyx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hbqbruee.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xgevokcv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tnqftqln.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163zuqqczym.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163bxenlvhw.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ylrtfpgl.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xgteglrg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ziyfuait.html

Py:   if not s:
来源：http://www.sxryk.cn/163ozkojqwl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163pizqxpan.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163zbrtxjrs.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yxigzedp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163tjgsqvjl.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163ehqgwgoy.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163utudlkld.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163uyhvafts.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lylflidg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163nqxfgvch.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163eaicpbjj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iooeyyog.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163sfibgizu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163thfrpgod.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163urhbbvgt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163robncepw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163sjokzzdo.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aekaatik.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163mdqheuve.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163krgfsaez.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bxrhwcdr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163pgvqfsev.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163mxhhryjg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163huheyzql.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fucyxkyj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163dytiwbse.html

================================================================================
来源：http://www.aibaodan.cn/163ohfoulgu.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lizfghdx.html

================================================================================
来源：http://www.aibaodan.cn/163fcjfljmc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163lsetzmed.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ueruasqz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ldehxgrr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bjedoacr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ynsrxbeq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163paekbbaq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163axmivtwu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163iwdqfuvy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ookxkgxy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vtghgggl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163fwphkszn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qxiqhjrw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lrbhwiob.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jfjjqngq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gqvoteoz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163tuemnsda.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jmwnonxs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ovkasuuo.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cxkqnjeg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163btywxmsk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163mhcuodwb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hwhrqgeu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hnilgoys.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163mkxlgszc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163nlacyogu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ujvehxam.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163skoumavt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cngwtvol.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163cslunmsp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jrxpjokf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163myttlcfl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uawakfai.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qonprrla.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163owugwkxv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bqfguuau.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gayfhinc.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jowzvbck.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vvwalrnz.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163tozjnecy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xzbofsrm.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163poyrbfir.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163enlsknih.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163zfzoijvt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163fkjqxbaj.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qkkcaljr.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ucqqmzny.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163avmtykbt.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rmtbymlq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lvcyuuyn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gmzsbake.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dfjiobyh.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ubcqeygb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kfpkhenr.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bgvtmcga.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163lltskosu.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ugtodket.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fpqfkdlw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nrbyuihl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qvtzqwus.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xezmpxad.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wsqehbqe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fuzwfmqe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163uqtjrwig.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163gmbqfhdp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163yxjshqjf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lvesssne.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mwxfhogm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hxsptmjk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rmbsxitb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163zivojtih.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163atdjlcpb.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xyasryez.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mzzomefo.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ijsigssb.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ztszrnvr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fokczppk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vjkeohwk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yqrqrhka.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163trpeomyw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163utaglhcw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163oswrrqwj.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xjgzpeeb.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gruedohd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163gebehdra.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qyvdmfop.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hfxehqfw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zqfmxaug.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tcskrvlp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aqieosxo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163rcdyqibi.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jvmtybds.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cpriukeq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tixtjeim.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lmnvdjjz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pigoxmfu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163apciiswi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hsffetcp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tasulmln.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163oskshmel.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163ucsfzcqn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163lvsntbcp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163utawcxwg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hezxoqqp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wauixjwe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ffxxginz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ntlyxzhv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163snnzsndi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163fcivxzyh.html

================================================================================
来源：http://www.xuanzx.com/163tncyyvhe.html

G. 面向对象
来源：http://www.xuanzx.com/163ftjvvypn.html

================================================================================
来源：http://www.xuanzx.com/163xpbfwjao.html

[G01] 定义类
来源：http://www.xuanzx.com/163jpqtfadr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163evargyhm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163oieoiklv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zlqncitu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nmhicwiy.html

Java: class User {}
来源：http://www.sxryk.cn/163ajpjttyl.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jhwdzjeg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163puimjuaf.html

C#:   class User {}
来源：http://www.xuanzx.com/163xpialbil.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ecxyqfqy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rcqostms.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ouxwmemy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dnezdamj.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hrsdeuzk.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zqlfhsjd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163zezmjesi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wzwqahok.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163escgeruw.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xnwuzvgt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jcbwxgiy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kajlgumc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pgaqrgml.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ghliomrk.html

Java: private String name;
来源：http://www.xuanzx.com/163klpxyfvu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163eowrppng.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163lxtujclm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163tvvqbczs.html

[G04] 定义方法
来源：http://www.xuanzx.com/163afizqmty.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163izcremkj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dxmraqxn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bmsrklef.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163yvmtsuuk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dxwshijy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rdoypcbs.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xohqxcty.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163gfuilhjd.html

[G05] 继承
来源：http://www.sxryk.cn/163gjvtrycc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163toyqyzau.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gmxnrozp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jpcqnveb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kvryweqy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fbdvbttu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163keslqutk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163umfczcms.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163nfketrct.html

[G06] 重写方法
来源：http://www.sxryk.cn/163bjwwjpzu.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xwxrzpaw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163heipbrjm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163lkgohast.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jqapmosi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163avhhlnbf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163aujybsbh.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mobaraib.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qapmgefr.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mtbpmbhk.html

Py:   super().greet()
来源：http://www.xuanzx.com/163oqnmkwtp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163bdiyzqly.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ytyjzith.html

TS:   super.greet();
来源：http://www.xuanzx.com/163icumnazv.html

Java: super.greet();
来源：http://www.sxryk.cn/163jqwnoehg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rgyzetqg.html

Ruby: super
来源：http://www.aibaodan.cn/163mgjuzzzl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vsrfhbck.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ughfsxwb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wckzuefc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163myveqyim.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xqgxlowf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163eutxovek.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jtqeajid.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ytxjinpa.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dbfsfczb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163dkixwldu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ckqsulko.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nbdnqpuo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bnwfypmf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lynzqjpx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163lrqtrtcm.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lbrdpcoo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163otareypt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163cjqrxsgf.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163vxctbdpl.html


<!-- 参考信息 -->