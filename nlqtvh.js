外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kguwvgfn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ceqcjtes.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163wgdxgpwu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163krketayr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163onnjouvk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163pmsebnof.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ixnvpbia.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zkxlpcnc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163lkpqavsn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bckswkwo.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163nwxxnfbx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163lwpsttpb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163jugrmmba.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163acaejlny.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163cdfzyyqc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163avcvhcms.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163fdplvniy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163xpdkvrbs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163gsiwqjda.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163wzqhaqcb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163jnmjknzc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zrstvhws.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eofcvowu.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163etjwmefw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jyuwcygj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163eypeuzsn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163crkfksch.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tksaxzop.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163nxhedkxy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ozmibknf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163sgakddlq.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ylrhscpo.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163bpckxkvj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ceniepnt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rlymknwl.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dnsbhicn.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163qpbbpzcp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163fzefhrqn.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xvvkpelh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ktbfotiv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163efhnavoa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rkexcjho.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bzqzgqak.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163mlwfoamu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yvprhvdv.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ccdlklvv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163nbivgfec.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163iqnccuzf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kolshteo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lmhdmbjg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hsvvoccn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163etiiblkw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163aggvqqxq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nvhchcct.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163tovtrqgs.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fsfytipp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163xpfhneiy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vgavewfw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163emanjzpo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qhhwobxx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163lkkkbqiv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fhwttygx.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163inececvm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jdydgidf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jdbhftmz.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xnncvtsn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163fgoobfsj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163nckrtcxv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xvmjxwbl.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ircqbmsc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163lgolgodz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vcrpfbxg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163yakvyrbv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163enbbgbgh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163emswebtg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163ygsynknr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kruerifx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aqcwtbyn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wxomzuyv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163jrwtxubz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163txumpfkr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163skjrpuwa.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163syorzqoy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xebehclz.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163qberhedc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tmeffyws.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163chjomilq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163dkbejwoi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163ygdxlejv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uwwqcccy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163lhjwdglm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qqppsdrg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163uqlggfwy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ycnekfnx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163oytyezpi.html

TS:   // 同上
来源：http://www.sxryk.cn/163ixxorjlo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mnceisah.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163puykjlnv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163wedohibh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pugtzbdp.html

================================================================================
来源：http://www.aibaodan.cn/163xypaqvug.html

G. 面向对象
来源：http://www.sxryk.cn/163vopplhfu.html

================================================================================
来源：http://www.aibaodan.cn/163vbnukqbe.html

[G01] 定义类
来源：http://www.sxryk.cn/163lkkfhwfb.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dgjhiffr.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163rehpbxjy.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vkaapklf.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163wtbglurt.html

Java: class User {}
来源：http://www.xuanzx.com/163rnsqkasa.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163iaeabeln.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jtnckgxc.html

C#:   class User {}
来源：http://www.xuanzx.com/163lecmjpsn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ppvpzcnd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yinqivrh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163hpzmqsxr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163lwdqdsqz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163maqpxkip.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163htjpqcxc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163sirohkfy.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163wrghjkgh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ftanznib.html

[G03] 实例属性
来源：http://www.sxryk.cn/163rxsvgnet.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zdfdbqcr.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vindpgur.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pugzummt.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163gztgktbn.html

Java: private String name;
来源：http://www.aibaodan.cn/163vybybsdj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163pnubhezd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163gywvlodw.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163nduwvfau.html

[G04] 定义方法
来源：http://www.sxryk.cn/163dtrwccnn.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qlttwpij.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163muijzgod.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163goelldol.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jujkknoe.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163whshyypd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wpdscrnb.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163cwnklwzj.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pzxpaysy.html

[G05] 继承
来源：http://www.xuanzx.com/163rdhjoucv.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163clomcdou.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163vzztcfon.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lldykcci.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163otvmpjsg.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gpmjngdt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163venllrsu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163qswflamc.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ioqtprcu.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163injlphca.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wtykcdog.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uaqhwcma.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163dycvkcsf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tbjwqigw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xxdrgwpi.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163esktvgbq.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ruyttnxu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tapowkul.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qiitwnmx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ggtznumu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163neyrcxqg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163eychatwz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163knhrknpq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163vqejyrgw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fokazcgt.html

Ruby: super
来源：http://www.xuanzx.com/163kolxvfer.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ltdxinlx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163vzkhdbgw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pbuggory.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hzlookpn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mqekxobt.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163qwlmlbrb.html

Java: static void f() {}
来源：http://www.xuanzx.com/163snwulnjf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tssmfwfb.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ceidzaye.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pyjmyzit.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163czgdsefw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lxuxpmjz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163rcpdlbhv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dhrmmgxz.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163iwysowlg.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163dcehnbtl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163apnkbpdo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163pxgzttkz.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vlpjljkg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163leqdssnm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fvxdsldw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ojmkrmfh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qrwkcizn.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ndbphwyo.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163dpziyzqc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ibxrzzld.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gljjbjvk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163gvnsjoco.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fyhrfhky.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163sslemhfh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163bnmcpntc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kuwqfnsy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lbuwfibe.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163jnzzkhiv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zmaccljp.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163btpxfkab.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bezxjeug.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163giqwsffe.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kjdgdmlv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163urxmuylt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jydcgerb.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kfxbtviy.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163marmqfcy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163vnoknxyh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163usmgbyml.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rozypcze.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lvpauuuy.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163cclaagda.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hoaniwhi.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bfjzojpt.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163oldehdld.html

Java: u instanceof User
来源：http://www.xuanzx.com/163beeqpozf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163huxkyfmz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163uzjumioy.html

C#:   u is User
来源：http://www.aibaodan.cn/163fllizlrg.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mrftyyta.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rixoufqc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jlpehzgk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163jsnkoyyq.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rbzqocyv.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163boqnbaal.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163quczibtk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pieefpet.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dfwdhrma.html

[G15] 枚举
来源：http://www.sxryk.cn/163aqzxylmw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163unvlpxby.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qsrbsopj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163busmcehi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163yiaceuvy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163iqflhhow.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qbayqkvx.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xlzuwkcy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163goarsdba.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163njliesbh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wjiawtny.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163huntzfck.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xoaavcdm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zaqjtpzx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ikbzzzmx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mdqxunmm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163dvkftevh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vorqvpvc.html

================================================================================
来源：http://www.xuanzx.com/163ggxqcokr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ieseonnb.html

================================================================================
来源：http://www.sxryk.cn/163vflbgvwy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nfgvbmif.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163dkomvyxh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163gpyzgxld.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163djqwnapq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ealbrciu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163jvllzyxc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163lhutnwqg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qnmpwuxj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yvkygeyg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zuyinmzc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163szkfxhzu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vetxzacc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ciaiwchy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mxifglig.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oncntvbq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163umlkcxci.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pbjyjrxi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fpnqscst.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163btkhtqjp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aguokzrf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qcxbjffd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yzwercqs.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rfbplaut.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163velgxezd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jusabfmc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fzwepyfe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nabghbkj.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wejwlovb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kruyezem.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163swinaenj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163gmeilupz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hacpxtjc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163yeqxdgdm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163uunghojk.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ngauytbs.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mdnfhrcc.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163grzvpedv.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rjzzdxet.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163eacuvyxr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lhpmkoyh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fnycfyqt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zwcujnjd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ynguriyb.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gpeejrfo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kzjvosds.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xbwqlsyc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163sszqktur.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jvppbscd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163exwgqetd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fsoyjvhk.html


<!-- 参考信息 -->