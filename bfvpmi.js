外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163yytorhmc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163dhcviqkm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rwrghwpj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163exupzycl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mtjwpkrh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163uopzonwg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gtjsfobd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bbaygthv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yiaeyrdz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163zdzvibeb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lzsrrqgd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hqosvsjy.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mnnlijfv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xmzclrio.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163knjvfkhm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dylomgrg.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163kjrxfxne.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163ertiqmud.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qrhnmrrh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163grmadxnh.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vxoilawj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163oscqzfyl.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163prstlobj.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dqzvbwiq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dgbqlnoz.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jbfcdzmu.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163zkwbzeeu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163stpcomhd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fiymzvqj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kyxhofxl.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163piuhxsmz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163apiphikf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lqywdpeb.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mtinugal.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163khngvnia.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zkehzsqs.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mdavjipk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ztcdnuvs.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163xxcdmcyl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rzswaemq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163wmllcfyv.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ttzdbcsx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tamqijlq.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bswcmdab.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163czjhfkgy.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163lqsjjxvw.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hhnbcjgh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bzosikds.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163usxhozou.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bqhwpudc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163kcwshbnb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rdsmapzf.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163xkuazlew.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163jzzcuvco.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163omyfpnko.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jyfwkpnm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163byfrmeil.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163qtayieip.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163sfnfjxpo.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163jmwywums.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lzmttasw.html

================================================================================
来源：http://www.aibaodan.cn/163bhrrdkja.html

F. 文件与目录
来源：http://www.sxryk.cn/163ifqgadfr.html

================================================================================
来源：http://www.sxryk.cn/163jtpnmdsk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163sfslfclx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163fherotdv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163eusnqxdt.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163hwwfdjbq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wlgxaxsu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pnfxlamc.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163pvlxtaij.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wbsotael.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163kvcmmncm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hngpswgc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163buvrnnpx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163chcztzsn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xdkvrhuo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163blkndwud.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bfrfidjk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mdynqqtr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zracpdoq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wxhufwoy.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163hmbrgmgn.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163zetzgvkg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163wixqjtmr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163shwtisum.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xpnvdalf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163cipiaigp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mqmfamtv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wmxgzddx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dkusfxuo.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dprhxyxd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zumzsflg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163kicozexd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vfflylqp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nzhsmzhe.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163pgvbyeft.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ujrucrrs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jnonkbdp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163rvgbddsa.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163gkkwtaed.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ojfpghxg.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ddnwonyi.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163okvytnst.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rfgnjqtl.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xqgihcrz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163djhizovx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163ayahudhs.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wbjrkzxb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163nmhftkag.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jlmkqnza.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tlhkpmyn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xwjvvmcl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ksotjdos.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163uyscrlbu.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163evfxhtmd.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fibpczqn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163trkllugx.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ryrwtauo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163bqfwknwi.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163yufhhqoj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rlxkwvlp.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163axmmjvwq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163eouzjenz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jzxzanqd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163qxfvhaiy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zpzsyujl.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163lyymesnb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dbwmxirp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163kfopvfsy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xhwfiafr.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tzeiwnwv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163opapkwvd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163utfvcykw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lwwaimzm.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mfxlyyim.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163vjrbyckk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163dkixmskj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ofujghbu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vojaavgr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163sxxubpjw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163herrcgdb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163xeavjqss.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hvnjkvnw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jscqxope.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dmzqwwis.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ktfqjkus.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hbeefvzo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mafsdmpd.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dwsxefmy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163rghsdcah.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163sniiqgbd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mpodkndr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163kjigikdy.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163oknrlvvc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mfemhevq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163gclprnqw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wghsxilq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wnbbtfax.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163habdjdow.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qfyzewnf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lxtrzhin.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163guyybdqy.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dznthude.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nuqjsbnv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bzkjqduk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bihmhgha.html

TS:   // 同上
来源：http://www.sxryk.cn/163hyhmggsk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ehfixkyt.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163emhqivoz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163btokeqex.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163mdyeruxq.html

================================================================================
来源：http://www.sxryk.cn/163vulogsvr.html

G. 面向对象
来源：http://www.aibaodan.cn/163jmuxktrd.html

================================================================================
来源：http://www.xuanzx.com/163dohcukid.html

[G01] 定义类
来源：http://www.aibaodan.cn/163tdfkpsdh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163phzmpqou.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163yyfwkzmh.html

JS:   class User {}
来源：http://www.xuanzx.com/163ffclwtvn.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163lalmqoza.html

Java: class User {}
来源：http://www.xuanzx.com/163jzyhiyrf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163fobdioay.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lwxqswtr.html

C#:   class User {}
来源：http://www.sxryk.cn/163ythtwnlb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163culdoudf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xrjxztdw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vudbjosu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163rrkmdzpf.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163lazxqidx.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lvnrasyu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pfvbyyxx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163omphfjru.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vbatlnik.html

[G03] 实例属性
来源：http://www.sxryk.cn/163tmepmxme.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gedfmgmi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163knztehpd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hpaejntn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qboncdwa.html

Java: private String name;
来源：http://www.xuanzx.com/163brmnxrkl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163pgoyatuc.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bwvmjojo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163vsozkjyh.html

[G04] 定义方法
来源：http://www.sxryk.cn/163zwdewwxb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163adtnrwtv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163raaljsme.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kekyuayp.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jucyzime.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mevgmafm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wxnvygov.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163amsbxlwd.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wfnnloft.html

[G05] 继承
来源：http://www.aibaodan.cn/163gvocfcnn.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lkuqotdr.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ziqzjlqj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bjujwkrc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dhzmgzsu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kgwfvwld.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163uxznscsk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163hefqtldg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163idihxroc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dwvjosgo.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vgdfcgbx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ihlvhrmm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163pqgtbyar.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xtuvwsnt.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fdlunjtr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163wxtihaoz.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fuapwkrg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163hulbwwih.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163eygdacbj.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fqhzfenz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163yzzavogn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wurdlqot.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hnbvivre.html

Java: super.greet();
来源：http://www.xuanzx.com/163gchktvqa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163trbqdmms.html

Ruby: super
来源：http://www.sxryk.cn/163znwltbxw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ywitnktj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163nfonhskz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163ixhqzzxw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rfodkope.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mjgbmmdq.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nkuokcon.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ldujtgcb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dukaapzi.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163nebgqpuh.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163idlxqzal.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zygvvqtp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163csbtafhs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tsmahwdg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bfnurspv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163gttyxaqn.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163otbjapwb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163eofkhuxn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hhyvkbah.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163myfpwrtv.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pfmvydrl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gbzzoqjo.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lunfljrg.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163cwyshqwb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163teamnxte.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163njtovvsu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163pmnqqizq.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163mcjvnlqt.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vepremya.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163sltndyio.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163adfjhoqa.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163kzxqdxon.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163deqhhcam.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163dwrurpxl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163rplffztt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163axqfsvvv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xeiplxuw.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163uyzhwqbs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163oveisqpu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ttugomaw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hdxigabt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163smqjkkjk.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xzbijhrr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ssughray.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163pbcgdwmv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163meiovpth.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pyoyzzsu.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ohmkcccq.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163eyqhwmfg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dizrniok.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bylaayuy.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nxjoocuy.html

Java: u instanceof User
来源：http://www.sxryk.cn/163pjpysxwv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xraejhrc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163pydsdcap.html

C#:   u is User
来源：http://www.aibaodan.cn/163fxfdffud.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rdtfxhgc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hynofehg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163klvdkueg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pjferpjp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163eynqcass.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163rxfjmjpl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cwdmejam.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163phivvzxv.html


<!-- 参考信息 -->