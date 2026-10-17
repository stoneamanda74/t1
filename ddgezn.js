外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163cweqiyyv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gdjkaalh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163cdyqviij.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xnvubrjh.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163kvikytqh.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tpeuiggv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qvngcsul.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163occciqbo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mgdglwtf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163rbhlbjld.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163sqgcnntw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ixgnjclj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vkdqfqud.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qgjogbzj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jsiceevr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lwjqivjj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163vtfjvuop.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163yoxbkxos.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163amqizpaf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163pwgcbrby.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163koxfecie.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163sexbqjph.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163eakssaeo.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163csqvasar.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tmvdbhfm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wgdjwfef.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vpxachqi.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tezisckq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163bkqfqhid.html

[F06] 删除文件
来源：http://www.xuanzx.com/163gfhlpanh.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dstjfcjn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pnthzezx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rkjrdqya.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163uljmtinm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gzpslmmx.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163pgzwxozj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163deqlqwlw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163cfngcnzo.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zmasmbrl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163slwivytp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ncvvznly.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163syswixlj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tvmahxng.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163dmiollkq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vwvtmlhw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ndblkted.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163sbgfihoa.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163eoumttur.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163uxaceytx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163yudssskf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163uynldmrw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ibvokgqj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zpthetrs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hwhlwkzw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163igynawpr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xzivroog.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wxfpapvk.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163eojnhnyk.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163wzqhdvab.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dfkfbcrj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163utuxmnnq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hmlhtxoc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163yzwpoabj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163rvgcxpce.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163hsdcehzi.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pbsuvpro.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163plfvfowa.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163mgkgbopw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mybqrcvx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163skdqgqoe.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qcwqxjxd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163tknkrlcs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pgjpmsom.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ctcjurwg.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163snkmfzmn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tyqljycy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xkjwieww.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uyiqfdoe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163geukogjh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163curpojks.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163dkcaouvh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yxsrwpio.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wkiafbyb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163dqwaalnr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163cqhibiaw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jtcjtvpt.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ffhvamcd.html

TS:   // 同上
来源：http://www.aibaodan.cn/163tjvbxehe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163lqxahafw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163snwilllx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163kpzrakqe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yitgmlaq.html

================================================================================
来源：http://www.sxryk.cn/163spzxxzbn.html

G. 面向对象
来源：http://www.aibaodan.cn/163ceuxaiyj.html

================================================================================
来源：http://www.aibaodan.cn/163lblgezpn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ovjfhqel.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rbhnrwba.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hdpbnhii.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uvrpsikp.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163sfvdgdfu.html

Java: class User {}
来源：http://www.xuanzx.com/163pzznsbat.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163mjwemcwd.html

Ruby: class User; end
来源：http://www.sxryk.cn/163anlboqlo.html

C#:   class User {}
来源：http://www.sxryk.cn/163pvktdwic.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163obywucke.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163lypfudcb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163kpjmpzgj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ocjbaniu.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zyecsjhg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163colzljwh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163sxuhowey.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163fglihycb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rcxkdhzr.html

[G03] 实例属性
来源：http://www.sxryk.cn/163jdqhzczi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163mwfqemme.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163clsjukad.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163aourczob.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nzyxptxg.html

Java: private String name;
来源：http://www.xuanzx.com/163wslrfkce.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163omlrisqb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rszhqkon.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163anvqahxu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163bheiuqsj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163dcemumwt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sdwdttco.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163grxmknyn.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dhqyooth.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163yifdggzd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163peiqdhvs.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ihutaxjy.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hugtdjbl.html

[G05] 继承
来源：http://www.sxryk.cn/163pjisixwl.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xpgtqtmu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nlmfxash.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mcxoocjd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163bgzuoyqc.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mdefyhsa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163istnrqtj.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163nhfkcztf.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bngjldrt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163nsrsmiug.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kmrrsdec.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bsktgcfm.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zhdwwucs.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163seilbopg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rysolzzk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qvcljkub.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163ohudozio.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163dopwsyra.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163skmcidjj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163xocmhkgk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ysyrycro.html

JS:   super.greet();
来源：http://www.sxryk.cn/163wpbzekxw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163bakxwffv.html

Java: super.greet();
来源：http://www.sxryk.cn/163tzkqflef.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bewseecm.html

Ruby: super
来源：http://www.sxryk.cn/163gmamoosq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ewgqgohx.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ivvnyxcu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163tckrdsai.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yrctzibv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kbwyxjfj.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uavdyfei.html

Java: static void f() {}
来源：http://www.xuanzx.com/163aaqiuibd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gnwbwkea.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163qimtwjwb.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163lnasceyx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163njxtzcqn.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wsntlwvg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163thymtjfj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163tbhhnwpb.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163wabfonqm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163amyoaxff.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xonhsxyt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gwzniczi.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163tjaoeldn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163ubdbxnqx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ljetihbu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163fwinwsgn.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163foqblsac.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nsoxxjrx.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163taezmtjp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ezdbmryt.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ldihhwzv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163twpciysr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tlzndnsg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vugvlkqm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163mdoyuzts.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rmcqzedv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163mbgfxvdy.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163kgudwfam.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rkawxeif.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163sldjpxsq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163blpscaie.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163boqzetio.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163arcdcnfc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ynhizeqh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163defniwwq.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mhofiqjh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163vkncxbkf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163itugakrl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pitiehbo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ehawaizd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163eskthivy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ildsqgxy.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lyniqrof.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163klgwjjtw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163grjhmtik.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yrspqvkq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163fjkopwip.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163dmdiqqgh.html

C#:   u is User
来源：http://www.aibaodan.cn/163kvmdreil.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163upqumrbx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163euctwvgp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qrrakvsp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hcuszmcu.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cygtmyhw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jvnxuqmn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pgmrmoqd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ybkwhaya.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163bdkgjlry.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xmoyrlxc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163npeedeuh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qdabjuwp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163vyhvzsod.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tzkjpypw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hxeohmuq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ymmtzaml.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163wwccopyv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163scvspflx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163henxwsxu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gldnctzt.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163dvysjeky.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uxjlwqma.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fyrtjngq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163bkztaftm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163msgtvxik.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163zyozbisj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gqrewkyq.html

================================================================================
来源：http://www.xuanzx.com/163tflimckr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tjxhpxps.html

================================================================================
来源：http://www.xuanzx.com/163hjkotroj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zzaunmje.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163zbuaxtrm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sooniflp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163iabguuyp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dhjspcko.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163umeegduc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zuveaehv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163sqctantl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fhnccvjg.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wbicrqmg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163lorupdjm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163flzncplp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uaujleke.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hqwjkews.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qdteanpq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ujykphjd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tsbkrwal.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nalmbtzl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xxcpryro.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163shohpbzi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pqcwikbn.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163vtamnqdn.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xyjsobfh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pmiudlot.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gfvepbbx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163nbynurqs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wnfaschk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fbxcynnw.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cjtlolyj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wdoqnkxk.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163polwpuqi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ibtknpak.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qcowhoaw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163qfiiokop.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163arldqvmx.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163bbhajgom.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163bidewnbu.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gflbyzdq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qvccsdif.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163utsopetg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zjjqtzmd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163raxmzcws.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dbjkzzpz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163uydlyhqb.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dkpnlgvc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lvmrbehc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zbfltstk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rpyxtpls.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hohgivuh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zexgrpeu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mfihpkrk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qbvnpcto.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163qiyiqsgq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163azyjxlqk.html

[H07] 断言
来源：http://www.sxryk.cn/163gwrxnehq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rojglbyh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163npaydhwf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hktpchyw.html


<!-- 参考信息 -->