外链999!wailian999！

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163infvovhc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163wntoxmju.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163eahlpimt.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163maufphrv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163xykbveyu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163magtbgst.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iuqqepff.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163mwmgmowe.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163karjrwka.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ycqrmkhu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163prjyzbtb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163uikdbevs.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yuakysze.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pgphmaod.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163drocdzmp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163fzuetkko.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ciaqbhkk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bpxxbyml.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163agwhxiuv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163nqxwzctw.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163iadltyuh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163todivgrk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qilsusoc.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163piaaefan.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163tkhsvefj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163xvrafynk.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bqxgvqng.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163hoqkeeff.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163dmyxesdz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163pndssnap.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163pvbcyyjm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163adjlyfrz.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163niylamyw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dtwixyku.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163zpxrkvvz.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uapboswc.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kgfeabaf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163mgshipss.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163nsaiduvr.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163emswwone.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163msgishcn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mijqlanv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xbhatdet.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163idhipzcq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163qvrgsrbm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163aarnkdbb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ixbmtkrc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163njltwbbe.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pgubrykw.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ifvrybdy.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ezunftsc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163danfatgc.html

Ruby: s.lines
来源：http://www.sxryk.cn/163vrxxncvr.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163yjaleici.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163jbiikcpx.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ddmoyyts.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zmiuabln.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fmktlggu.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163fgynjvay.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qdjdthpw.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163eblqvbus.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163teaesgyu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163zealhpng.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cfcaqlka.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163obaqaxmf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dzdzmqwn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163gspmxnxp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rymengsk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163houmyxae.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cifsjyfe.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163lqadguar.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163robrdhas.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163lpcngsuj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163kgxhkimb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hoixvvno.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ztjyuqpe.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jxfpyxgp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163shgfryrf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163lyyunswc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163aqrwupoj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163usebuxpu.html

================================================================================
来源：http://www.sxryk.cn/163lxeqqodz.html

F. 文件与目录
来源：http://www.xuanzx.com/163vcqknylh.html

================================================================================
来源：http://www.aibaodan.cn/163ayxebcpb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163npwistdy.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xjgneghz.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163isfgxzki.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163xbodnczk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ardnzyjb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163djdejbxo.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bjqpcxac.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163yrgpneej.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gffaixfq.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ooqhbbre.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tiiamvbv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163scqnsxbc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vdbjdhyp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gktgouxd.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bvpnlgyg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jzyvcmfx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163plkurtix.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gzdbczgj.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ujhzprwp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nkyyinhc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163djtpdnsk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fzhmenfu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163oquneifp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163eugkrxjv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ivmoxoem.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dicgcpvu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163gpdwywij.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163zuoefqty.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163quyckpsd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ozdevxuf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tthztrmj.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nowsegnd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wifyliku.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163lnnwkyav.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163dqzorgvd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xzyvpccn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wnefuwve.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yxphlqbh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gywrfgpc.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qwzhxsuv.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163sjvgkbcr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nldfwscx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163axwnlkej.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uekncgvh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163znmfycdn.html

[F06] 删除文件
来源：http://www.xuanzx.com/163omquyynr.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xraddzks.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163zemnnbcb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vkffrehh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jrcpcfqb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pjuziktt.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163cnszomnq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163afuvcnhm.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163smsxmqoz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vxqrchtk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hnlnscmf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163mhxklruz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163krjyzdsr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wdlnmswo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163eepkviil.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gghmgcmk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163mfhembyd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163mjlehici.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wlxgivjl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163cptlqpim.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163fjmgijai.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bxsekzoi.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ismhekzk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gnppkclt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wsuopdoz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163cppzsogy.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ugwbikon.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fqtriyll.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dgdtgbol.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163obzmxmlj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163juovdeov.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nibjhcri.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ihvdmnaw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163icefkfor.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jijbglvu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ujesosxp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jfqvonme.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163erwjsxvf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wbdcczmt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ckfpkaxw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163skaoajno.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163erjqhgnj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nogishvr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vyzcogyu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163bbpctflx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163uubaaicd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163boscavph.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hjubeumf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ertgfbgd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163leoxlrgm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nlskqjtk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hygooeqp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163speovtax.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jcedbaty.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gbcxakzx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163jpbmxwuj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ueirwlgi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nogiskxi.html

TS:   // 同上
来源：http://www.sxryk.cn/163zgbiedym.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vwmjfiya.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rmcdzlis.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wvgjsbod.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163iujxvvck.html

================================================================================
来源：http://www.xuanzx.com/163blwwohww.html

G. 面向对象
来源：http://www.aibaodan.cn/163yyolpnqj.html

================================================================================
来源：http://www.sxryk.cn/163jnbzuiep.html

[G01] 定义类
来源：http://www.xuanzx.com/163mjmtkctc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fszvzmvz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hhfuvqrl.html

JS:   class User {}
来源：http://www.xuanzx.com/163lspwlokq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163mcxnqasl.html

Java: class User {}
来源：http://www.xuanzx.com/163csmzmrac.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vijfzcrj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163vevwzgvl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zhctslkv.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kipvjufg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163ihpnqkdf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163wblvymci.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163hyziogvh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163eapfdhdj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kyeagxfq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qwwvaikm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lhlsfazr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ulhxpuez.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hrsdfopn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163utdahicf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vwtonlma.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163gjdcdaag.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163raxuxpij.html

Java: private String name;
来源：http://www.xuanzx.com/163krgsoqiz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163huuoduhf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163dblvyywi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163omhencbf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ahstwkdr.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zfbtklbj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ugyvfkfz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163tlhezxaj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fwfhncpn.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163chhnobbq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163deckqjfg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ezozegyd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ifckvisi.html

[G05] 继承
来源：http://www.aibaodan.cn/163ehigpads.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163dhoicgru.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163unutcqca.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xbbqmolt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ijfadper.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163fplgibcu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lsrxruzu.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bdxfgbdw.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163astyilsq.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bxkuwysb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xntowwyo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fncxvwrz.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qhlwcbli.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qetiqpgc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163usovpmzn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163lathcahr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163dylvqfxi.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163qupqwhrb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ibaajkdt.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ysyauodr.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163frourqok.html

JS:   super.greet();
来源：http://www.sxryk.cn/163sxlglbgj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163vlowvhpp.html

Java: super.greet();
来源：http://www.xuanzx.com/163wosqphjg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163brzqihfv.html

Ruby: super
来源：http://www.xuanzx.com/163cujnknez.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163khuapffx.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163sbndukau.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163prsebhrz.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163axikihei.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mxddxlir.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163bpwwmeru.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jwyjvowl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xmzawdyd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vrpgczdz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163jknxdjsb.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163iycztecw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mhulmziu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163inmriitu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163fksbznsm.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hpmaqtni.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163wxguihao.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lctjtrxf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xikmktsk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163lkullvfr.html

[G10] 访问控制
来源：http://www.sxryk.cn/163twtvxiri.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163qrdgqcyg.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163efdtrkjh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163bmdqpuhx.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wdeomiqo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163lsikmozn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163owsknybe.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kvadzxrk.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163txddxqta.html

[G11] getter / setter
来源：http://www.sxryk.cn/163duupjrgt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ncwruhnf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tnjbtsvb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163yoftzncl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163uxmobmkv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163iocyavwe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qarwnkmc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163aijlfzvn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ncrxronu.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163drykoggj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163buhrnnzs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163yzctezam.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163brqkdxsw.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bvipssnc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rgqgtlym.html


<!-- 参考信息 -->