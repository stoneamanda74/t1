外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eonisqso.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fmgefwez.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tesyexwn.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nnobpyeh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163rueuqlkv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mtevedqz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163uygtzfry.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163kpaaoybe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rrdelnlx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163blybpalf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163jjyznqmf.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163hbgunfnn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qdzuzxyj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lobeiyjh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ehdiwfdv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163tgoymjkd.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163awgqazuw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163szenniff.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tbewywuq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163lgdsrybx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163urchdhut.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163hsfwfagj.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163deymelya.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163fnhnhjvz.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163mdsegvnu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ojuhxwlv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163geusdgjk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jjlydkht.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lpiijifj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163pmorygre.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163tnvbehpy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hdqwunvh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163pmklgnsm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163iwmdenul.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163rlfksvlt.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xtcmckws.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163semjrlft.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163desxpcqn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jzxmmlmu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163decxhlss.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163fptonurs.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163lsdayxcs.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163hlrfyqex.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163tndwpkpa.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pdvphnkr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163izrngdla.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163ocvhmxss.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163dxrlehcp.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qgdpdzer.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163vsyzbcjy.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163plnmcchi.html

Py:   if not s:
来源：http://www.aibaodan.cn/163wbruhdmi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163pzzlmnde.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ipxfjqjb.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163xkmmwnuu.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163kfweliet.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163mzxdlwaq.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163pysksmuo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mbngmxas.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163diywxtof.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yicufxdh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nwahghhw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163odnhrmpk.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tpbxvibd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lddznfwv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163owotwdty.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jrjhrvbh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163vjkbbmcm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163aezmpujc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163cskbonvd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cwputojb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fozuhljz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163mwaxpasl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hucbcvgu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163yhrjzjqd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gkzgdtfe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163drswevms.html

================================================================================
来源：http://www.aibaodan.cn/163zqirbesh.html

F. 文件与目录
来源：http://www.xuanzx.com/163qsswrngi.html

================================================================================
来源：http://www.xuanzx.com/163kocfubew.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163epozlhhq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hvazevww.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rsbidojs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nfwclxeb.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163gnqypvpx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bqfiebzq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163xzofyrhw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163mietjzqs.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xhlvkptr.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tvnckqrc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163puamblqu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163jewkoydm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163uhvibown.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lgiykvkc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tjuxqxti.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163tcginlgl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tpgyflce.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163pyrtssvd.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zzznvtln.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163yvwxcnfp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163osmmpxjs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bnyntekn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163moubhfof.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163nshdumce.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163znmapvre.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tkehsgud.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qihfcfce.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163pjmizwdv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163eysucqcl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163skltjoaf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163eakdurls.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gxsctvlh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qxnjbdfg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ueueaugu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ohczdtst.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xymjcajg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vmzitima.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163zlywtapt.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163clncinha.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163esscogtx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163eqlzpipp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wndgvmsz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ypwuaqbr.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163enusfbkr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163gmrmrwqv.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163psdrmkzo.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163phozlnqm.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163bgopwfem.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163icbptdly.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mwrontzn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wtfhuujc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163rwugqspj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163bcoojkbx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163hxqwxmly.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163hjdvbmbt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mzckcfim.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163fspxcuzj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ncucumnn.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163aupppvfd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163twcqqzgw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163izukrzqj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ekthbvot.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wthyfslx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163reobifue.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fofksqvs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163chmwssch.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lnfpowib.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pbdbnqiq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lnvmuavg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tfotoywo.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163pxfdhmuq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163noeycsws.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163yjmlfguh.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163miwwlqkw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fhxylhhq.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163upejgryq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cbcqbzcz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mpcggtim.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163sxgbesim.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163edhhqrbp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163srfmixjf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163mlgzoovz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vhkfigef.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163acfhlepe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yepbyrkn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163erukcqwu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163yrgkoggy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163bnlzizba.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163febptmlr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163axeeiyjc.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163anwdukih.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oxpwnuvk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hvnbnxul.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zfrromzt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163utwhstku.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nxjcrrho.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qseegqre.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iithzhhj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cxrjxdru.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cdnnznvs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163oglovfcw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ugzdgarj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ayvfomsx.html

TS:   // 同上
来源：http://www.sxryk.cn/163mezrxqgq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163cprbevxh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163bezzqemy.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163pwaekqsy.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163glwhopej.html

================================================================================
来源：http://www.sxryk.cn/163bnbxjfrx.html

G. 面向对象
来源：http://www.sxryk.cn/163pqvnjoog.html

================================================================================
来源：http://www.aibaodan.cn/163ttyddggu.html

[G01] 定义类
来源：http://www.xuanzx.com/163axwfxskc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xiddrnmq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gbtwsdvs.html

JS:   class User {}
来源：http://www.xuanzx.com/163llepexpv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jxzhwwia.html

Java: class User {}
来源：http://www.aibaodan.cn/163ikymbfol.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kleydqpm.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vocqlwul.html

C#:   class User {}
来源：http://www.xuanzx.com/163lfomlmno.html

[G02] 构造函数
来源：http://www.xuanzx.com/163aseaqmeg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163mlhjrcsc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cwhgtdsa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163smnbccee.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pjeetiqe.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163oztdqsar.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mphpeqeo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wgamtego.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163osdwhsee.html

[G03] 实例属性
来源：http://www.xuanzx.com/163nqufwqib.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163hhnfgdhf.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rkkhmcpw.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163qfycplvh.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rklwvuvr.html

Java: private String name;
来源：http://www.aibaodan.cn/163onafnszp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163envpqtpa.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163qyuagadc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163xadvmzyz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163viaduzly.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163adjvaymf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zgyhofyw.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163fnoiqrpj.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163igxlwtbj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zvrhulgk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ilahiczg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163tepqchkq.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163hapznzso.html

[G05] 继承
来源：http://www.xuanzx.com/163okzoglhr.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uzkwspbz.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163erdralpq.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rllbpstr.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163viuyjrrd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163huxutsml.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163fbutepoy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sfynjzvs.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163pcmqnhzn.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xadfkasn.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163skjyxphi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pwtjrylk.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wdohavgc.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uekzfums.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rivssjsd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163kfkxsbby.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163uwghgkxk.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163jlbhlwmo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mbatafnr.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ynisxqce.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163oocedwnv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163evjubvld.html

TS:   super.greet();
来源：http://www.xuanzx.com/163uegpsvki.html

Java: super.greet();
来源：http://www.sxryk.cn/163qiibsrwd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163accdslym.html

Ruby: super
来源：http://www.sxryk.cn/163xrxugllw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163jnuwmfey.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hjifdsiv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163uuedfjgh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163fttiyrry.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kqvuxqzl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wdcrdjqr.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ccdmokyc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nmzbpkva.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rskfwlhz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163dudnafqo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163fdisztic.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163otjjqjhm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163ipvkgcew.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ndrcloud.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rsveybbt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163uzmuwhdz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xdkszhtu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163cnbcvapp.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163xlmntirg.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163npvavnab.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hybdenww.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bpuancvn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163fqxwqwcj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163eoacydwn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hxigmkah.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ntmubllp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163junaxnov.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wdzlzsmk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ynkynieg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163jrhfkbeb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tjlnbtcn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163slqoagvz.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cbhbdbcm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163dpwiyuav.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163jnjyfrpo.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dohevqjf.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ftiximzh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163xijtklcm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hcfsbpcl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ykqjgtyq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ohrxthzs.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163cgbcxyut.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163wkofrzco.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ystdlxgt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vjccgnnx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vdxrmqzh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mmegqkej.html


<!-- 参考信息 -->