外链999!wailian999！

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163merbjiip.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163tpmfomlu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163qzxyvymg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kjneysmj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163cwuaxobt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163esbhgdpv.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163zwwcpxyf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ctdxmwho.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163zdjqxqtz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qonrpjal.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163pdvngyie.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cnpwytuo.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163fufamnrz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tabwqoft.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163njuapjgp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qhugbogo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163mbroiqzv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163vzxvkrps.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163bghqzngg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163sysahmcq.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163vuejuxrn.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163oktrzkgk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xubiyfic.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ixvtdovd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xdujluyu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163cpobawwn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ooolcpno.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163joyeftuy.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163uxvjhoyr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ihyqeqkw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163qmhywupi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163iazuptht.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163nwhrsgen.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xwplbnwl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lwstwmaa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ocbvgasj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163lfishnai.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163bsdlciay.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163zszuzkdt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163iatepcop.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163ciauykoe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cukctumb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ienkxkxy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nvuxygob.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163uoesbhas.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lmjxgpwa.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163rutaejlb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163dooumunn.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163cdjejirj.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163omuscxvb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sugduacf.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ualwxcmi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163eiidudgr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163urrriqao.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dwkgnnbd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ugcqpykw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jepvfchi.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vkpbvfeb.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163htkltbez.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163hmcyumiu.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tbwkrsem.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gxofydub.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zqrbmngb.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cecudplt.html

Ruby: s.lines
来源：http://www.sxryk.cn/163svdnrsvf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163jgoyckuw.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163kznzoefh.html

Py:   if not s:
来源：http://www.xuanzx.com/163qvyrtjim.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163mqysnycd.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163qnoecnwi.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163gioghtht.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163wobwgeot.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163teuadiis.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163vgvhepch.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jitjpxlg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uckpfzsu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ecobkacu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163qnmxzmkk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mgrfiknv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163dqsljryy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uconyppx.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163sxdfkjyi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163swyvwayr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163cxykvlqr.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vioppdtg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pakdbqmm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pnnlauig.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rtevmiga.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lsggxgcr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163lbfrwbrn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163kmltykve.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zyjvtmhp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163pubqqrry.html

================================================================================
来源：http://www.xuanzx.com/163akddpsgn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163nhspoeds.html

================================================================================
来源：http://www.sxryk.cn/163kwobctao.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qhhfdbsw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163meetsqtq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163svypzggs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163iimggigt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163mvhbatwc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kghstazr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ckvvqvew.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163csnvuiek.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163aelczqic.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163vfcgufje.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163sgrebzxv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163qbtbpgjj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163uqskqjyb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vyvxwotc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ebrbvxav.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163sdrltzho.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163tmkalfea.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163vwdhiraq.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163igrldjrq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dlkgvsdb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nywqdggg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163okmnukhp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163juklpnfw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ajhmmruu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qrjbphys.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163zwoilvey.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kyqzwljr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qsjhymkb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lkvruwlx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mrwdawzg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163irtliulv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kofteldu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163juwarbff.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ogmtaoju.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ldxscilr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163hecqnmbb.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163xznwmmbp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163qkxivhth.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vpsmudqc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163blhkepnc.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163shosrjge.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fargemdw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163meutattv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163eihiaipa.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163uboncxxj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163cgavqtxi.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dsbqkqzk.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163wubowllo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163galimatn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eahzjvua.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ctrsqmeb.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163cvzddgaj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ztsdtekz.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ljpacvmi.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fulrnmtb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163csqomblu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vfjdlrim.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bzdnisaw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dwqsellc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hkvyncjt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ppvojkrl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yveutsfc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163tklcggwm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163exmlmwvx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163aeinuovz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jrjcxjsw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tjvrblnq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163idfjfobv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hknpeoud.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uzuvmqsz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163seqowkmg.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xobjltey.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163gieraffe.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163hqoswaeh.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163lfiigaup.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jfdsmpdr.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xummmwok.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ubvdbqzj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163nrrqqcnj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163korejlmr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163swlbjtiu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163euxxexyf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ihouyjeg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163tmzfojvx.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163awnrqqdo.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163hiiodkox.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163oziblhzr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163sootgkzb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163estpnbzl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tjqdorhh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qxnzpgkw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ezvqbesn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xcngfbdx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163effzoljl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zlirwrjt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163igzclmtg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qbssgqjl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ngjvkzid.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xazjywgg.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163thbqnokq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zoqjvtox.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cbuuhlag.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ujvltwuo.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ibwgulxw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163capmzojw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qsthywzm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163obafrfok.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wvcvblvn.html

================================================================================
来源：http://www.xuanzx.com/163lehtenkj.html

G. 面向对象
来源：http://www.sxryk.cn/163xnpiqbun.html

================================================================================
来源：http://www.aibaodan.cn/163ldhprzgz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163jdorlnyx.html

Py:   class User: pass
来源：http://www.xuanzx.com/163favnommv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bmfeqeyx.html

JS:   class User {}
来源：http://www.xuanzx.com/163crtdxmsr.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nfqvnzva.html

Java: class User {}
来源：http://www.aibaodan.cn/163qgtncanz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163iuhsrbwh.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163oprtqwpe.html

C#:   class User {}
来源：http://www.sxryk.cn/163taxmnbsj.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ugnatejv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zzwfvixc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163cupriyte.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xnasrobn.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163wvklhiad.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fumxjzpl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jyomlutz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163mrfhmeez.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163viwokvft.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163unacyjqz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cyiwisoi.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gtuemoaf.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163slaprrfq.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163jwnlxoua.html

Java: private String name;
来源：http://www.xuanzx.com/163upqdoqgr.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163vexnyees.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163igqpoqxz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zfizqube.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163cvlgupvq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yfmaduiq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jtdciqtv.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yoavofxr.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163zsbgdkjl.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ttujoukn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163corrlywx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gpndtmmd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bossidow.html

[G05] 继承
来源：http://www.aibaodan.cn/163tjzmzpcn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163jrclnxod.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163shqmikcl.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ipsdtuds.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mhfikfov.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163nbqxyfir.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hdjxtpqs.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ttwwvgbh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163ezzmjrbs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ryfzqczd.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gulsbrrd.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xxhxpbbo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163kapilvvx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mufpnypt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ohlymqym.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qmmemqlg.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163izwxmygk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163qdraisjz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163egfkscqs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zfvlclkf.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xlotegue.html

JS:   super.greet();
来源：http://www.sxryk.cn/163rdjqsssy.html

TS:   super.greet();
来源：http://www.sxryk.cn/163inbagrvs.html

Java: super.greet();
来源：http://www.aibaodan.cn/163pabrglpu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rwirbvvb.html

Ruby: super
来源：http://www.aibaodan.cn/163mjfvzsgo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163wlslvsjb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qrrefucj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ofiprnnj.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ncukwhpp.html

JS:   static f() {}
来源：http://www.xuanzx.com/163usvqjiwd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163fmywiwux.html

Java: static void f() {}
来源：http://www.xuanzx.com/163okkzrxpq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mtumlxjk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bohawlwe.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163oqycrfvz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163dsurxulc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hjvbfejg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xetkvkuj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163nhveuwrv.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hefezmzq.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163ggqpxpeq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163uhchrogw.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163puanufka.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163svziaxfz.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tewtlyjn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163bbkrjyue.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ucagkwqa.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163zrztznvy.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163nhenvgsd.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163oqvhhrfw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163vbnnhghw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163dnubbaku.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163nvioytnz.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163nzipsywn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kklitytz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cabpzhsm.html


<!-- 参考信息 -->