外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ruvzycpd.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hxnekwpn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bdtslaut.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163abpnfwpj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rqdbszua.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163wdxvmweq.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163hgmaknzk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163jphdoodp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163monupnqu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163omejhdac.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163rwrlnudc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xegqpnto.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163jtjjkpdx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163icejeiqc.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ketxhrng.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yqypdzey.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163jbdobatc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163wplvhggh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163bwcedpsm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wolycyiu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ptehawqw.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vvdskmaf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163kgrrliay.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163bluytidj.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163mjemnneg.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163lkcucxdt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ooxpplui.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tlnzkcah.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163lhwtaaem.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ppidiwdj.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163zdiupvbf.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163naigxman.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jdnacqgh.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wmsorlmc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wmniyjxf.html

Py:   if not s:
来源：http://www.xuanzx.com/163gfeovsss.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163zhkcjcke.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163kohnotcc.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163ulqrhdzg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163zhcslrqp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ulczwnlx.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163etbgbfml.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vgxvsklt.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163tcmjmome.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ihrykitu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163pxinlcpd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ueqjmtuq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163htjpppyw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pwcbdbux.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163lwcjrztd.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163rlzttghi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mjchvoan.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163quufcfob.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163zevhpgrq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pzfhaecp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163feivkgel.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wshxiryt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163agdcekky.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163nxccwlzs.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163xnvueokj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163oimdzwiy.html

================================================================================
来源：http://www.xuanzx.com/163lntdeqzt.html

F. 文件与目录
来源：http://www.xuanzx.com/163reiamomf.html

================================================================================
来源：http://www.aibaodan.cn/163emgjsplk.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qqfslxlf.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163pfjttxdz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163riviavnx.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163yukfrdqj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163hikjepgn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163namjwgem.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163emrgriky.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163morhkbsx.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bteskngd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bmfffeol.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bfjgewwo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rjswrmav.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163phicayrs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ouphjman.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163penxpeoo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zlbhgriw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mduxxfhy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163eefaajuj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163tszbvubv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uhtaazxb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qrsavcjk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cgdjqvva.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hojgyuhr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ymlwjpeo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163wbgttsnz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mbyhadps.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163skznqxyt.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dfycloew.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163prgxferw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qfbuyoba.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nlyrlmxh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ckwyqqip.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163iphsjsen.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163rlgioekn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163gnsheufa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163whpddfwe.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163cxiibmdu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wqaikcym.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163apoheeig.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163bvwzgmba.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163adxptwkc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fzfpnnwa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qldmkitv.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bdrthmgo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163shcmxbzi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163vjtgwbns.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ulwcdfgx.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uirqwpbw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gnezomyp.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pjyxjcjp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uemgibts.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163punxweib.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gjdznhnt.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163crqbairo.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ncxhkxld.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dtneplxe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163lneyyvwh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wisttuae.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163aymrkcsm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163yyesccyu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163aetngmyv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163suyveqkd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163fnhzdlty.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163mvskqxzq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163hqwniwzm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lwfhhpjy.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mwuvnfvd.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163eizkrptp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kckruttg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fesdslvp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lezaxdnr.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nyzlzsyf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163lrczbryf.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163zdnanqpt.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jgbvxprd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pclcvgzo.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qfshsuel.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ohfmyxlq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163pfdolcss.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163jojtjtis.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kvluofxu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163vyukekmq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rrykcwov.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ytpqkhcm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yrfbhgar.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sehijepz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163pgnbivud.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cavemfck.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gblgfcjn.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163koxfyxbu.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163jsqstjdf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fzemcefn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163awmlqxic.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hwypvhrb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yymoanne.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163cixfqmvj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lsckvfhs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kizxuwmn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rbeymerw.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163gybcoosm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163drlwzcvb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163obegsili.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kfxgjuox.html

TS:   // 同上
来源：http://www.aibaodan.cn/163qvtoojyj.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163oraxgjni.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163evtbvxkk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163nsgfucac.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163oiupmnlt.html

================================================================================
来源：http://www.sxryk.cn/163ipboygct.html

G. 面向对象
来源：http://www.aibaodan.cn/163hwwmxujc.html

================================================================================
来源：http://www.aibaodan.cn/163kgkpuril.html

[G01] 定义类
来源：http://www.xuanzx.com/163yatazsdb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163plirhayb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fgifmjzc.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bigpakfj.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vnoszppz.html

Java: class User {}
来源：http://www.aibaodan.cn/163eejspcer.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jtkfvohr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ushgthhu.html

C#:   class User {}
来源：http://www.xuanzx.com/163aimmukga.html

[G02] 构造函数
来源：http://www.sxryk.cn/163nnddxers.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163usrmiono.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163enyaexyx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163zhgeqzzw.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163wsgnjupb.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163renzuixa.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163udflwnmy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163cviluymp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163lkjvxcwi.html

[G03] 实例属性
来源：http://www.xuanzx.com/163qwtuuqoz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163zjkdxxhd.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ykmtwisg.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163xguieqgp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163hhhytpwp.html

Java: private String name;
来源：http://www.aibaodan.cn/163iiipfpoq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163gxbuhduk.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163xnsmansf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jfexyygu.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hltvdtrs.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ksnzbwgi.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ynmuzjic.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hatmeweq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mzyprzep.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163dkrzbnid.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163pgmqpjan.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163tvzjcxcm.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163umhyrpmx.html

[G05] 继承
来源：http://www.sxryk.cn/163rxheugww.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163tkbucrqa.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ddmarnpc.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tjaqzvpw.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cduvvlxt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163xcbnwait.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163taxyhqam.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163aglklvfg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vejaiuvf.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zweerwzu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gqskoonj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ctoqeazm.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wbhyhoux.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qxryaola.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163yzpsutqi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zqyjoqbg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163knlmjunm.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wnkdevwk.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cdgjcayt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163ojjdmbga.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nfnonxwk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cvpaxjev.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cenqdcwu.html

Java: super.greet();
来源：http://www.xuanzx.com/163muzxpebo.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mbmmrjwv.html

Ruby: super
来源：http://www.sxryk.cn/163pcqrtuev.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wtfyweic.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163phfnmmhj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dqcjctbw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163jifhbbwt.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gztelimk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lizckccf.html

Java: static void f() {}
来源：http://www.sxryk.cn/163flfcmviu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163woqjqsov.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163fuchtbwm.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ecseyvca.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ytywpmrc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163bqyhliob.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tqetamni.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bocqcsjy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ikoojbte.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vfithxxg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ourxemnf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163rdpnorgq.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pefnoffl.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163njdlhmwj.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163xeuxcwez.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163amozatau.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vjdhzdrj.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wlqxomzk.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163xpcednfn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ktdersle.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jlcxtjij.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163yfqgjerc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wcexoobo.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163jvirytxd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163haucuvmn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163uqeaumfo.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163nriowked.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163pesvskux.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gqevdasx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163zfvliojq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163awgcwtvd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163awabwzps.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163qpbcregf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lyiuogrk.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163odaqlwrf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163evfcigug.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dwqtcmyy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cyzwmxdx.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nlceyrjq.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hgldawtx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163kglvvwda.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cyfplpom.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uywidkoq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163cyoisxcg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163neqbylef.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qktvugcz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163bbkmpfrj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163oboiftzl.html

C#:   u is User
来源：http://www.aibaodan.cn/163ewacueff.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wflluctk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rqcmxneu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wuirjsis.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163bcncihco.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163aysewsnr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vwaxpvlm.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163fgnjhnfe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ftoydixe.html


<!-- 参考信息 -->