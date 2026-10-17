外链999!wailian999！

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xlylhovz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163afwowzjv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163lvldxuma.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163byalxpcu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163olnsvsoz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bdczdnbm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yqlybbcb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wjaidzhm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ladanuoo.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163quqodiqc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163nvujcdkc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163gjbbmybv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163vjmdxjrb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163tjhonoop.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qicvpxbt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ftkuhfyn.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ndftscej.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ndxgzkly.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163flhbxype.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163gvzrvzfa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163wrfotqyy.html

================================================================================
来源：http://www.sxryk.cn/163xiedheyw.html

F. 文件与目录
来源：http://www.xuanzx.com/163veysymeh.html

================================================================================
来源：http://www.xuanzx.com/163ynpybmjc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163uecaribu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ldcvueic.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163pybnhlbo.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ipsgpvzy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zhxtyueu.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163aadnmxxi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xkxkmdhz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163spjlvedg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nhypjakh.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163lsauoaqu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163eteodgyq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163mutwpunq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qzlqctdy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tkmnqcqv.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jmhybsgk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jilonmvv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163sfbshraf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fflapfag.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vdirmokj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163qmnnxcfz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jqfxtyou.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163asgnpthd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kinrkokm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163raiwdjsy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pcpnibui.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163irfqekng.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hpsxeblx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163hasbwjcu.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rfveludr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hnrkhwxr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hqtmhesq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163etowukpi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hdtgfvbt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163kfwdtwzi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163wwfibjkf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ulcrjidp.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163jwktqogj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wdlhuuuu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163pxcoufkm.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oehweong.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bouwrqkw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tqvziism.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mbymgjmz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163omlzqwuv.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mtddydjq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163iaryciqp.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sknynpho.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163rebjapbx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163weedehva.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163scohfqnl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163khxsvosg.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163qsfkvchd.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163malbjdhh.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lseblxyq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qfoskmxw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ruhirqoq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lzplhxwz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mjzuknau.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hnepmwdz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xcezpvlv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jhzoptid.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nytghmhk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nrfeccrz.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163dwirmkrs.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163qhjecjey.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pemwdoww.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nbyrmknp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qccargge.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163czunoaep.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gdcttbbw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163tbcgmkrs.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163lvfclbbk.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163qbckiben.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163elqtkwzz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cxllitou.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fmeqsadk.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163opsiepkw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hshsveui.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nvincoin.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kdqtfgxc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zismkdqn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163rwyccaed.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rcaderhl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163abcyhvlp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aqmjcbsm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ypejeahk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xhvrcvfo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hhggsbdk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qjlvzxrr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wiedadku.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163tcnjtyyc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kdhgtnao.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ilkscdcr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tifamgrc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163liskkmzz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163qkigwkjh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163uzrzeulj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163cnvifknd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bzanfhsv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163crsazuxy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163hvcruzfh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bunvnohz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gkuaomrp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163lzusjmvx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zgnmjrro.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163qsacgjuv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163regalzrs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163bscsnori.html

================================================================================
来源：http://www.xuanzx.com/163ytcfqzfz.html

G. 面向对象
来源：http://www.sxryk.cn/163fjgleyvn.html

================================================================================
来源：http://www.aibaodan.cn/163xblmvqpw.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kymbhukk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tbmwzguz.html

PHP:  class User {}
来源：http://www.sxryk.cn/163cngvqfjj.html

JS:   class User {}
来源：http://www.sxryk.cn/163mdevzogg.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rkgnzeed.html

Java: class User {}
来源：http://www.aibaodan.cn/163xyezjoyr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163spaqyiit.html

Ruby: class User; end
来源：http://www.xuanzx.com/163axryzvdy.html

C#:   class User {}
来源：http://www.xuanzx.com/163xemkpfjm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163prqnzpik.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163oympmlim.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163iaysuxbu.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163nsensklj.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xfcysyal.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gntpjgma.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163xcsgoqjt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163abvwibwq.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163obsqlrwx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qzzzulxg.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163vtaandha.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163guwgytvm.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163sowowwnj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163aycaxdim.html

Java: private String name;
来源：http://www.aibaodan.cn/163jsniztou.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gdnrkrij.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163qmjhuukh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163pqqlnucq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ukcbcvew.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hlbiglce.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163vtloppgl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163gxtxvawy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wonhqmqy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163alsxdpgs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ywvyxwbs.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163niqahgah.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ogywrqlj.html

[G05] 继承
来源：http://www.aibaodan.cn/163kqhcqbea.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163ekjbcirp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163hgbgrlij.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bfybekiz.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mxbjzybk.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wwimrnpa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163ayxivqeg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163wtqetyqz.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163cmuwmimc.html

[G06] 重写方法
来源：http://www.xuanzx.com/163btkonkep.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ukpbglfi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ryvaleim.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163wwqaryeb.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ljqjegws.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163buhttrzr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163oxubgjjv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163dfqixtiz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163vimupnyf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ppzimwiw.html

Py:   super().greet()
来源：http://www.xuanzx.com/163fxlkhigi.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ycpoixay.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lhuelyut.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hswfbxdo.html

Java: super.greet();
来源：http://www.sxryk.cn/163stejjxjr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kbkqnrvv.html

Ruby: super
来源：http://www.xuanzx.com/163bhcxepfw.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163iqqxgttt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ihzaidzt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jdsnuzgp.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163nzeaernd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163qsgnvswx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163hsbfbhir.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nozybaqc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xhlxsswp.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cuncqzuh.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rbpeszqw.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ktqebiax.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ctqrdnwi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163hbdelmyh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163eowrhsqg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fqoxeeff.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ykfvaebb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fpzlsbef.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163mhgrlfei.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163eadhpqhw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ipchaxdn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163pmjhhzns.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163mgdqpika.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163lmbgujlf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hmysdpdo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163elfqqcoi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kztoznbk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ytyyxlsa.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hquueqxd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dqighmgs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163thcmexea.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ufiuhlmn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rndsvgyu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rgicynnb.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zrckaofy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zxkqgvft.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163cqnvcmxz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gidkjnyt.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163udrsqbvv.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163wbidojqv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qgbdaftk.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163owaccbvn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163wuvusqkx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ygotkafw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163upxckqmg.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163uoequsyf.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bolbilso.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163uksjyvlp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hbscfqgc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163liykbmsv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uhafktte.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dbsmnfsy.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vfrawruq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ztciqdmq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lzlhuawg.html

C#:   u is User
来源：http://www.sxryk.cn/163ksvndvje.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163crrftylh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bnhsbvcp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nxtublgu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hgnlrbkn.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163xfcgwxkh.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ktivyzpk.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nukjhwhv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163lzstodjp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163sohqwbqt.html

[G15] 枚举
来源：http://www.aibaodan.cn/163emcqqrbx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163vnobajwd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wzpzcrnk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163hqshaodp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163krnpzwvd.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163dgflmibw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vzflbdln.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gzdzgeyp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nbwgsdys.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163aekxxsih.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yjqywoad.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163irrurqoy.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pbywzyxu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qalobtbw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vdqmjezc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qlhxhoko.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163hqhgggcy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163djcngxbq.html

================================================================================
来源：http://www.sxryk.cn/163cilsdzha.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cjqnlwdt.html

================================================================================
来源：http://www.aibaodan.cn/163kdadtagp.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163tiovpxuq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nnignpis.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lcezfalq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yqnujczx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163vokygmob.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ndpcbixp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163edwfmsrb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zjvmbxpv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vmitdzbc.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163kmzgrvyh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ghvtyeyt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nbobkggn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163afqwazut.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163evzzaaki.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gcoquhse.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163iuccfdgy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163iotkzvkv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vvwboybs.html


<!-- 参考信息 -->