外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163wmfksksw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163epmgdzad.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163knebgilb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163pcpozscg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ztypbqen.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163ryzvnfes.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163dkxdcquh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163pvioqklv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vtnhugfb.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ihqsyykb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163dzwsutra.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mlzawtgo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163tpblkpoa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lukkmhdb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gvoaoigg.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163emnfuxbv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ugptddek.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xrbtmzks.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xvppcgeb.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163iueukpqi.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hrputgaw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wzkfhtlp.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xgetiphd.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163phdhqapy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yqkgaajq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163baddrnmf.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163htvzwfht.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nrnuexgt.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dncvalav.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163aauuuqjp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163zznyslfu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fedjoqbb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ctvmpaax.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163poqicqjg.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ycytrugz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163wmpeavgi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163bbyvxaet.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ixtxwqtr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jgrrtdlu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163uvnvqjnj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163uzgzieqj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163vllyzabe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ngowwijp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kytnwqub.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163yqcxsden.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mplsiaza.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jhpnvkss.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163gtbdkhib.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163eaxaavop.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ydwrjejf.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163vemylzbp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163buzsodfk.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ontpgqvc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yqqxvdff.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163cdzzxwmi.html

Py:   if not s:
来源：http://www.xuanzx.com/163lxxgrteq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mhkettvk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163awtwpknr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hgjdpbku.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ftodxvsx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163hrcksutb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163yhcxxfrr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163auekkmny.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163vevwztbf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163rlwpawuz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163ujrnjkzv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ptakdugh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hxwwrdvc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zfhhplfz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lzoqhoil.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163tkoqqwwl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163hmhbjaar.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qatyigij.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zrcklfsl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lkenmbzf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ghkgmbjf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oasgppxl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163iuudukqv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163kxcuyydk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163vxseejzj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xmrxkukc.html

================================================================================
来源：http://www.xuanzx.com/163fssddlta.html

F. 文件与目录
来源：http://www.xuanzx.com/163kdsnkbin.html

================================================================================
来源：http://www.sxryk.cn/163nrzxdgkz.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163dubjyoxf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hkqlurpj.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163vctvinpe.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163eowcxhcn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vhtaddqe.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163swersnnt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jeqquivt.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163orbdkqtb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163edypytna.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ybywvduk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163jcmwhign.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163keknawlc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pflfrwuo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rxmruzbw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yyucqqhk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163hncypdwc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163vjspywft.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163rogqytof.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bvfzbjer.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163susgqnxx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qnzupyyg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vbzzcisy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jefrodas.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163aahohggu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zkkgggaa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163dmxfesyg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163xrrmyazj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163mxgmygyi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163fyyjukqw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163pkyommle.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pmdassok.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163piafqbjg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163adxrhnts.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ivwaxdip.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163vhyavljh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163sfbdxqjg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163zihtmfxs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163iddtszdg.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lyenzrkj.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163oyoktjru.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zughhdmi.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qadbfppl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163edravfgp.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163aqdxdxkq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163odsitzgp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163oplkxvcb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nlnhkfep.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163wrnkrlyp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bmdaflik.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rwdyzoyg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zyqoifxp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163dyofkgjj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163smcokyur.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163yglkzolu.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163sazhxwwa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163yyfiymld.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163hupwntbx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hvvkijjf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fdzsjscr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163gbgcecvu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163tybfqpqe.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163czjjteff.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hlwaanze.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163lddquylj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nvgkwxlf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wqfnkgqk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bomqamei.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163yjdjcfpn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rukepszq.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hcnmhuzv.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nceitwii.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xhfaapoa.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gbdxphnj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163yjgrahzp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163wtriszrs.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163twthztnc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gqoxcbst.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xqmfevls.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wsimbpcu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jgsjlzdn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163cgdptemb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163rbypmqia.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hydtsssu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163cnlnyffo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vtqulzsl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163xrigsrvt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xgmzpzhd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163desxprmu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bxiwxvei.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163kgelldpk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jzyfzbtm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bbgnxfdx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ogpgurof.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163vmdfuhqx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cazwpzmy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wdpkztts.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tbhxxpwu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nfjvgoaj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163gkgjokgb.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163itbnybsj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163sqsizqwb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163aczcfadg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ekudwebb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163vbesokxe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vabyknjv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163twhagxxd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163cppijutw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cisoiavg.html

================================================================================
来源：http://www.sxryk.cn/163okqjdqoe.html

G. 面向对象
来源：http://www.aibaodan.cn/163ktdqxeuj.html

================================================================================
来源：http://www.xuanzx.com/163grsuehih.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ovgwvgrv.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ibhjsnwp.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yawjypph.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bnckdqks.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zmvflrbi.html

Java: class User {}
来源：http://www.sxryk.cn/163dsyujfwa.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163fdvemplh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ppyaqoat.html

C#:   class User {}
来源：http://www.sxryk.cn/163dfltfmdi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163qqzrxpva.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163kfdickul.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xlcxjhjf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gulwckpm.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163fnlzrpum.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dcqohgyq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163lsqcpnht.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pdgwbyys.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ueowpgfz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vibwhqcq.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163smyheooq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163wgvmtshk.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qbaozqrg.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lsgauups.html

Java: private String name;
来源：http://www.xuanzx.com/163uhrecpxt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163njurwcqt.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yfqaiquy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163njvvksct.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hdysoqjo.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wppxdgmj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gqdcmofz.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163zdvjxjke.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163zfrxgrgg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163thzmrsqr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163alpwszwa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163bvunazpk.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163guqhplsm.html

[G05] 继承
来源：http://www.sxryk.cn/163rsptqvob.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163gyemcafr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jjkxddyv.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kavqznuj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163inhkfvsp.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163jonpsnhv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163mccczxze.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163znnwmrsh.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fjpeskxl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xizzewzm.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pspwounz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vzraoskb.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163iavtnkbg.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163xdjcmlxw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163fvwymerq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xaizchbw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163zpxtupvr.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163imnilaog.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163cxgsksfn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kixgcjsu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dinhjdtc.html

JS:   super.greet();
来源：http://www.sxryk.cn/163pvaiwwcd.html

TS:   super.greet();
来源：http://www.sxryk.cn/163zbttbgdg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163stykwwsl.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163jhoiykrv.html

Ruby: super
来源：http://www.aibaodan.cn/163msdxuhmo.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kbankrpx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cjmxkmro.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dfuhonnm.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163wnnvltsw.html

JS:   static f() {}
来源：http://www.xuanzx.com/163sttiznjm.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163knzatacr.html

Java: static void f() {}
来源：http://www.sxryk.cn/163dnnouwls.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163xatdgmgo.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cunvbilv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163grjvfkjk.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163sbymbnka.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163ixhqxqhm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163lbkeyuma.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163lnxytxnu.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163lrmtwwps.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163bmfndacs.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nzopttvr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xxapafbl.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ghivnjsr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ytvybdkr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163wtoxbjav.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pnmdkgts.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163aqcgsjil.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vgweilsr.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ysdlzajq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163jlrllavt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163xsptgycl.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tsmrhbwu.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kceilmfw.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163tknycpwm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163wemlrlqr.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ghbexxkj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gweclpkb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163jqgdeecb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163iqedijvi.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163cgrqheoj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163eiwlobhl.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163dxxaqedf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163bvslscdq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gzxyzaic.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gyrpebia.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163lhecqcps.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163albwshnt.html


<!-- 参考信息 -->