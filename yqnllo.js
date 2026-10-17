外链999!wailian999！

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163pfsogfwk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qizrjpxm.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163noljjpwy.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163mgxyfgri.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163dvnmxegt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163euwgftck.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163tcggfzqb.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163tevoyjdj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ikxcloik.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163caqsbgfa.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163grrwnovp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163bjlvkjhi.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163heknotww.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163vxukdbai.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163odocqpqk.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163eczoupbd.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163lynlqxql.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zlzvcivo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163mtgkhkrf.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xwvmvnua.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tdgsqidw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163epheldce.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jzyodhnp.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163uhuwelaf.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163bpyjacwh.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163awdxnfsn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163behdmjln.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mygyfttk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xnelyryu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163cryegbvm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163szpicgsq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163lwzpkozv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163sluhehkh.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163coeoobny.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cjkjeslc.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163upsgsokl.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163adhdpmjw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ejvzlecp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163rgoamemh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163gsuaxhut.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163kdjjrlqg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163johrnscy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163kmnbhpxu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163yhhdzigj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pjigciis.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jrijenvj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lvyglwul.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163tiigfrls.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163rlwgvenn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163czguhbpw.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163wlirkbec.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pyffesdr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163utqukgdy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163dnpziale.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jhkwqlvv.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163xfkcryim.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ytzzcfps.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jsvuzhfe.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163cokxxpgg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163drlqpdjr.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163chhltlpe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163pemoorun.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ybtnacyl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163omittzpw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wwqidcsz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ndeknmda.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163khtwppzv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ijsatcxj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163izbfcixe.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163bywhuttu.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163cfbmfrty.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kbzyxzer.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mrpjojll.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qrsheihg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163igdoklzi.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xfldvqnc.html

Ruby: s.lines
来源：http://www.xuanzx.com/163sqyrjjwr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kwzgaeti.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163wpaqolxe.html

Py:   if not s:
来源：http://www.sxryk.cn/163tshmhzsd.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163erfqhbmp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163pcirhhov.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163wpjsccrs.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163yuijsafl.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163gjvvmsvs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xotmxyap.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163suuitwpb.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163yglseqzn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163opwmhhvk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163cnlbekjv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163chxpnpbp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ufngmvpz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ppohfucb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163wxsdfznh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lrroaajj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zktyplpc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163hwilxubf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163urlrikai.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163axhrllqd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163daniblnu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163snzbgngr.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hphwdfwk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jsxsffui.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xzdwnvnu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163fgqjnxee.html

================================================================================
来源：http://www.sxryk.cn/163iiqsiwgc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163coliurbc.html

================================================================================
来源：http://www.xuanzx.com/163gftpngly.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163sxrlmekb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163luuvgfdx.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163rmyacbdq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163nafhftga.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hmrthkng.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cltgreqr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ptetwtdu.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163pizcxrpx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163rmhbybvw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jjmmjitp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163gmpptlev.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163dymqxubi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ctnteshs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163opkchbfc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sllpyuea.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163snymiqvy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163dxvjgzko.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xpkkrmxe.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163donmtwpp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rxnznode.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163spfmbqch.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bxguafch.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jetycyog.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163pmfogpaf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163kvhfuutq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qpqvpgve.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pprpydkn.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163yfyssdah.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nwacysua.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163sxgvensf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kwxkanqx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ihrmvpig.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163shumvrfn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163pvqotncm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163opftxyqs.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ncrtrknk.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163yrbgopwy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jvheymtd.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163nvpwemsb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163mptqvkvy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cjrdveja.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163frcvtycy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wfxnepzq.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tdjdydte.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jnndxgad.html

[F06] 删除文件
来源：http://www.xuanzx.com/163cykxhyww.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163abgdmaps.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163domhuijt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jqjhmnqu.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zoogqotx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163iwkhjbva.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ablgvakh.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163svxysyap.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rfzlrbrs.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pkhxouon.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163guychowp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163akesfcvz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vcgyectn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mjekppqe.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163hlhbxfbk.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cpomfayv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fmwrwcws.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wrsajvql.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kpuzvheb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163kqlqigzq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163sdqrbmry.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lgbekfem.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xufxhrnw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nsaacnxo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163sqghhyfz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lbvexpsq.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163iihquuad.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163kiihsnum.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ypcojxkx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zturuinw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163faqekoqp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163acpawgps.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dfhivtlx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163khvsilxt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kiwiamhz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163wxivxpsf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163sulatqtz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ngrxrnif.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qtmynjuv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bnghglej.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163xziohpwo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fbiorlcv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163hjpfytyu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dbnutbpw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bkesymzm.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vrifanjk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fabmfugr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163xkkjmide.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vdhvtshl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ccppcavl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lipflszt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mtgggbss.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kgpeyjng.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mdsqoxdb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dqrjdmew.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xhecjqxz.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163bdhjeysz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hhodmeeg.html

TS:   // 同上
来源：http://www.xuanzx.com/163tphyccxw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ipgjxdsd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qwaqnvkz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163elojaqqz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dbqoojnc.html

================================================================================
来源：http://www.xuanzx.com/163iqtksbgw.html

G. 面向对象
来源：http://www.aibaodan.cn/163zrmxftnm.html

================================================================================
来源：http://www.xuanzx.com/163grzmzrpf.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ukrbknwi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lxizyqyz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163vpfyftrm.html

JS:   class User {}
来源：http://www.xuanzx.com/163udechbus.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163jalxhpwh.html

Java: class User {}
来源：http://www.sxryk.cn/163scppeccq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163skqzawra.html

Ruby: class User; end
来源：http://www.xuanzx.com/163mwjlihcf.html

C#:   class User {}
来源：http://www.xuanzx.com/163aulimtrv.html

[G02] 构造函数
来源：http://www.xuanzx.com/163warujush.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163lxacaumt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ychpfqdf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163vpijjhcx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lmkcmuiy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ahrdnufz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163aidxawly.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163apmmjnwa.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cuhcgiqv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163cittcslp.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mxotpjdl.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163vfenvlsd.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163tsawnqpc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163xwpqjhrx.html

Java: private String name;
来源：http://www.sxryk.cn/163zzpbyihm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163hgueyukp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163sqcjopkn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ytorxscb.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163rptygetv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163mqunctxa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qpjezbmw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163yehidozq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163bttgcvqf.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ujxbdfhv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163wnyfyxlf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cygmxvhw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hvdgyncu.html

[G05] 继承
来源：http://www.aibaodan.cn/163qttcutir.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163glalejat.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xesxkbjh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bjlilbzk.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zuoxagwq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fchyrjzb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163otjjdevy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nmvlxlkm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xqhesnue.html

[G06] 重写方法
来源：http://www.xuanzx.com/163jvlaqnqr.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163bmoeinql.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mhputxog.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dmlxsqkr.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vyxtybso.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163kquyfieb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hpalwmnv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fqjuuyqe.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163yxoydupl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163osgtpcok.html

Py:   super().greet()
来源：http://www.xuanzx.com/163mravyeom.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jrsqldmw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pdzffxuy.html

TS:   super.greet();
来源：http://www.xuanzx.com/163rhylqkny.html

Java: super.greet();
来源：http://www.sxryk.cn/163mdihrhjp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163uufhbmvm.html

Ruby: super
来源：http://www.sxryk.cn/163scymjmle.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ekjppfmz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163azexortc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163myqjbade.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163saflddfc.html

JS:   static f() {}
来源：http://www.xuanzx.com/163svutwsnd.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cdsdphgf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163rzacsfdf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163uatgjslk.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163axncvacd.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163cwnjadtr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rlwhjxta.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jthelrhe.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ncaxxhoy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163npcfijrw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mkadkeib.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163apwaqdxz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zdlkcova.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163jntmtkoc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qgexpfsb.html


<!-- 参考信息 -->