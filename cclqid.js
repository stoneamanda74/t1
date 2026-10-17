外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163jjemyypf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163flzgzfzm.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163houssjso.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jjiubhvi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zqwbfvac.html

================================================================================
来源：http://www.xuanzx.com/163eedtztes.html

F. 文件与目录
来源：http://www.xuanzx.com/163yfufgvyp.html

================================================================================
来源：http://www.xuanzx.com/163omisadze.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163bdauohez.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ieyfallg.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163wqmnwlpl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163ngqdcwxi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163argfilot.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lrzvkexh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163aalyhvmf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fmiltult.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163nfryujuz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mpfptwul.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163vwhygovh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xkyxqhra.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163akutemtr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bfravzdc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cffqgeyb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163yzkatnhx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zxfobtbd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163lzwatgfb.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vnuntlor.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163uidgfkgp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wsocgtto.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163soeblegg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cbzjkgqi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bvvngksv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163hxufffxh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hymmqmue.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163sujsdbyn.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dpakwbhd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ogygpcuh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hfzjpiak.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iehtfjvx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163svsuwrce.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163mifvcrmw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cjgibgec.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fwtgzatr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163kuiypruu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163mguzrbli.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163wyoxmabl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163gaorddmg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gvlgjglk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mwprtwcd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lcniouix.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163biaujelr.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163sdzsrwdw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cmhbwvlt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163envcohnf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163svtjruwu.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163rgabhkxl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ofujskme.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kzicxknd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ugmunzth.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wuckfvfq.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163jssbkkvg.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ksnpgevy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163kquwxzsq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163tadcxosr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163dgmmktwl.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tuzjyhrr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bwnpghsl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163luejhbka.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163qnutkexz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tcyxilan.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wdvhojys.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wzfksolp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163rpdyrwzs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163aohkaytn.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ohsfmdqf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lkonnfme.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yczobnnj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163schcphwq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163bgqjfazx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163gwrbytts.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163hcycawxz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163uhivoawx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ujphwslt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bvybpjru.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gyngpfmf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lvzwufwh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fnppesqw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163edwsfcyt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bycnpkiv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163hkrtwgcf.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163iyowobov.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ldqwuqus.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gmazpwvd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163cmkidonx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hsrhtrvy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rcnhwkhv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oosimggj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163jewejikz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ccusaxzm.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tcwiylht.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163ztogfeem.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bteveceb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wmogroml.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163rifpcloa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163oowuizbh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ndmppfet.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163lahtpknz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163aaloztoh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pbfwjxom.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ewraajiy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163gyvbipjd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163htnxdolw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gmtucnyr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163sxulnvcn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ncvomsxv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163zqmuvllc.html

================================================================================
来源：http://www.xuanzx.com/163fxohuwrt.html

G. 面向对象
来源：http://www.aibaodan.cn/163afbueqjv.html

================================================================================
来源：http://www.aibaodan.cn/163yubahpdb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163efgwqqij.html

Py:   class User: pass
来源：http://www.xuanzx.com/163kxjivlfj.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lxgcybvy.html

JS:   class User {}
来源：http://www.xuanzx.com/163ltgifxml.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ttwvwukm.html

Java: class User {}
来源：http://www.sxryk.cn/163jsgpcuiv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bdggucap.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gzuiusve.html

C#:   class User {}
来源：http://www.xuanzx.com/163svnhqjjo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163ctkyzqal.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163bwahzwdr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xnrdpgag.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163fyenipjq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jywjeoks.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163agjjihjf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163hxbxtlei.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163aowgvlfz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hayygprz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vzrsexfz.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163vzlkilnb.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hifsytar.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xjccnmjl.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lkdfdgwu.html

Java: private String name;
来源：http://www.aibaodan.cn/163pisrsgov.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xktgkhwt.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163gnadbgmb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163lgmcnxbn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fhdjcmgu.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yaleidhn.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163mcdnjsxl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ycjxkbfq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163kibvjwed.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163twbnffhq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163pygavajr.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fdojvhof.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wkxdkpff.html

[G05] 继承
来源：http://www.sxryk.cn/163lefgahrl.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ezxnyuno.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163djvzlxdd.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163uioetsii.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jbsizjbi.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163jgzgibam.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ufmuleay.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163khllsdzf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163eszfzgkx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yekxhzaj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ujgtmswm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dbcdnadl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cjekqzog.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163aqgleakj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jazhaiub.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ihugtbeb.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163tsrcgjbq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dhfigwiv.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tekhxtuo.html

Py:   super().greet()
来源：http://www.xuanzx.com/163nqoplkfq.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163hgvklveu.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qicytvjy.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163wbbigicp.html

Java: super.greet();
来源：http://www.sxryk.cn/163bjqjynuf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163glbhzcoo.html

Ruby: super
来源：http://www.xuanzx.com/163dtytamol.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fambltvt.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163obsnehuq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zabxhpcz.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zqeiymzn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163sklnvqzo.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163dexoskcg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163dconkwlu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rqaqqwfl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ohdytlgq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hoyjqkvf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163vjjhwrvp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gfagzbnk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gzatayrb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163hrwiswxs.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163juxbffqh.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163istypqbt.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163sbeogdtz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163fhgjhque.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163blzcpslw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ptlkjqec.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163npivgizt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163cbjsjwkk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zyjeiors.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ilqnzqtl.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dlhwsksp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ishcdbjv.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163ifgrwhdw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163prlkwurh.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bfulgunn.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tkltynyn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163uzhkbvzs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163cwnicsax.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163cpenuxbq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vqoahttd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ombeakhx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bzplrcqn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163njldkjgv.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163mkyunomx.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163efxsyfre.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jrbeapqo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ozoujyaa.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ztdiscwj.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dlvgmsxl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rsqdzmxh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163cikfvitu.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163oyylssqs.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qyekpium.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wwsbqfec.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jhwddbgp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163devpdwrg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163frulqqpe.html

Java: u instanceof User
来源：http://www.xuanzx.com/163cqeazpgj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163htimpxdr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163pxxbfdeh.html

C#:   u is User
来源：http://www.sxryk.cn/163tyectkus.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163pgokqtxy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163hxxnjkrw.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163htyttgwk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163quxdtebz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cdoanpis.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zkjrbuie.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163lqanuubq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163gugnspgd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xrezevac.html

[G15] 枚举
来源：http://www.xuanzx.com/163xjsssgsi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163eoondxce.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zsonowkf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ebqlcmgi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163iewpadsk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163azcdmsop.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163gvwsinzf.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163zluhdmnh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xhgwdirh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nostqjpd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163btvpdabo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163sfkldnwf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vkafuzuw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tzskpezy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pigfbnkf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163dhyaiial.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163kwzmjquj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ygquanbm.html

================================================================================
来源：http://www.xuanzx.com/163byvbjgwv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163deeziokw.html

================================================================================
来源：http://www.aibaodan.cn/163fxrhizmj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xlsowvsu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163yohfvoui.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163flgcxlch.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163duogvlou.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ytlpxktn.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163rcawmsgj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163pybvymvx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ontthyav.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kiuqdkos.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163fieztxsk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qjqkjuje.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gevzprvu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sjqhlwxa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yznkhakz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tmgushpp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dhbrrrbz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fltsletz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163chzwudtd.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pgatjbrn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hfhpjlij.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xgzpfccd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xpkqnact.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kxsgegfa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dwjkfysg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163csmtsnzk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wlijguhh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163qvfqfxkc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xgmqnkoh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lanyjsgv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gllzrgdr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ywpiqdvo.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zipllqvd.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ewrgxhkc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qrlsvdzx.html


<!-- 参考信息 -->