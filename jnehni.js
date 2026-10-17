外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hdzfgdwm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vpghjapo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vtlfvivb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163abvqhxhz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jbeajvqf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bmmslyxy.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163lmdrtpfc.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163siqttdqu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163dizulozc.html

================================================================================
来源：http://www.aibaodan.cn/163yqlzrsnj.html

F. 文件与目录
来源：http://www.sxryk.cn/163yaythupv.html

================================================================================
来源：http://www.sxryk.cn/163frdyryig.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ggmnjljh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cprcwjyu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163klnqzapa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163rwurzeof.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163dbozgill.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vwhinujb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ngjgtcom.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163thyjwpkc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zcorcqvh.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163uoplunhf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163wszhcgfp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zenxpwli.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163reqzmjpp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fxmypehz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163mbcefvnt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163gpvjweyp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163bqulqugr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163bgnayhil.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163miiivywc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pxirojuq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163fanicqtz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163icxyyabr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163amgckmji.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bjyvmrmo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zczcymgd.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163eprombug.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pkhavufe.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kwstjanr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kkhbwdto.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qsebaprq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163oqrcahqt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jbbiptnb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163soslxlgs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hqebxups.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ieaeztno.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163lvkxzoqz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163chrtpmbw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cjaesnvq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163vrpkbmdp.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wcezxzsh.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yrgeydig.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163olujkeuq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rmziqbar.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163krouzfda.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163eknqcsxj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jksulwad.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wciitzto.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163yplfrblw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163pbhnauza.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163bfdcydco.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163utpnkewl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hpkapbom.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ssqxyaou.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jqgjcvcl.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hwdspieo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163pztofvwu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163umycoxfr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jmswnloc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bfhlunug.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kkszpdps.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163wmkdkskf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wgavfksr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163njdhddvd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gpvlawii.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lvnrdrgo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163wisjvbaa.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163peddzxvb.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tnvcewia.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163vhhtylol.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163fptavybj.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163kiheuvsb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ijbupgqq.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163tagstrqa.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163yrezperb.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163iuakssmu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163poassvmk.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163udikcwha.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pkfeitlj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fyxqnwhk.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163quyqibvs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nyhouybl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tguohdan.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sqhownkp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kgbcnuwa.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ltvhlbhw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lsgdszrg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dsndhhvb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fantlkwk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hlrtnmjr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ocjvcnqq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163keslhtut.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rtrtlmwg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163wkcxqkod.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jcificuv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163atwzsott.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ftwvopuk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163cvcwdese.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hfyszifg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ddlisqwh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163owwqbsgp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ssbbltqg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bsmdazeh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163inahonbx.html

TS:   // 同上
来源：http://www.aibaodan.cn/163grcbhdks.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163catgxfkg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dcxjvoqg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163xvmvialx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163fdqpsjct.html

================================================================================
来源：http://www.aibaodan.cn/163xrgxwojm.html

G. 面向对象
来源：http://www.xuanzx.com/163fwshdeox.html

================================================================================
来源：http://www.xuanzx.com/163yqhqjfek.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lyputfxy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wcjvedce.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bohcopeg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163vzjuryhj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cbmzbmpx.html

Java: class User {}
来源：http://www.xuanzx.com/163qyenivxz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nqxodvgf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163hcwisgxl.html

C#:   class User {}
来源：http://www.aibaodan.cn/163vypwzxod.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tmiymcpe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163eoxwmdqu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zulsysnn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lfadfyaf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163lmnioutm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163icnpdcix.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vvvqjrwb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163trqfzbrx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nojvvajr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163cmeydpce.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tfkzxwtu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uodabkmn.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163delodqqn.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qqburozr.html

Java: private String name;
来源：http://www.xuanzx.com/163kggkbsvw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lyufcyws.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163aeuziilj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nbjiqzmq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163yqdaarsr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ihlsbjvu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nqrubwjg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pamosxbg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163kvhaipzp.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163svcmifhc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163vxroijty.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163pskxsekb.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xvnmguiv.html

[G05] 继承
来源：http://www.aibaodan.cn/163ssurgjqt.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gendtylu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163admpprga.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cynkqdon.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aluggtvn.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163jwfiocgd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163fltdgnsk.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ikpwsofl.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163mwtpcnku.html

[G06] 重写方法
来源：http://www.xuanzx.com/163wariijit.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163hnsxgynf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zmadcepe.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163jswpclva.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gymnhawo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163chyvuiqb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163zhfudjwd.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163yonijxvl.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163fsylpzhj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163wiqnkyjw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163thchpugz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mhcrpzpn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163yxrqpdra.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163erbcevrb.html

Java: super.greet();
来源：http://www.sxryk.cn/163nbvdhvud.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163aitaldag.html

Ruby: super
来源：http://www.xuanzx.com/163oujhiclq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kyqdqlhz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163foxxvihd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ugqwishi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163whwybprk.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ushnkaea.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pijidakp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xqwwvjow.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163jgkpawuh.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163nlwrpcyd.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163didlkkrh.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163tjkymeye.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ttkvufsi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163omngubme.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gevvxvvl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163pwfxpbui.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163kwphyeav.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jbarnbos.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163eusawgpi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163qcxizjkn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wbbsemvn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xrijmkwa.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163wzzvsoxd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cwsrerga.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163hcrtpogm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163lncdypcn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hkcxnkno.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gaayytne.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163pucgnwmq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jsxrbaux.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163luqqxtah.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aqidwuat.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163aoqebmam.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wwvgeayd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163jhfiwaap.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163smbmvpbd.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tcekdzuj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lmitwhjo.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163txhefhkx.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ztqhcxct.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163mmjzeqym.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163htdbklri.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163wsktbziy.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163crwkonfv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qlunttfu.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163smbeysgx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kbamftid.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hlxixccq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163lggvqiet.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163iuemkgdd.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163bsgwgnug.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kpqelxag.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nfpvvngl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hqnzuuay.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wjmfsjjz.html

C#:   u is User
来源：http://www.xuanzx.com/163hkawfhte.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163lbolqglf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zozqwrto.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163spnsprtx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kpcgquih.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xeeeboak.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fobkfnoa.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ncfvwuqa.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163chqkzemv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163knldzyqt.html

[G15] 枚举
来源：http://www.sxryk.cn/163eedtzbif.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163meltequw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ypyukdba.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lgdzswhq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163faxliafv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163igtfstex.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163nmvtwbfp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bvmjcyba.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pymukygh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dzrslxam.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ravkrzfc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163dmmuuqms.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tksqnezj.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cwiyoprn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rumqjwds.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qajzbtox.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ixxojtau.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163diqqoakb.html

================================================================================
来源：http://www.sxryk.cn/163xaedixif.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163avgeaidz.html

================================================================================
来源：http://www.aibaodan.cn/163xpndfucb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ccejyqnc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jxcnajpx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cmhfbqpx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163edbppdhl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163cwpkdckx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163klnfnich.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163nchhblci.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163zbedajld.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163jxmdrdbb.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163jjgswpoh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wbcomeyr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bnepqvnf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jrljacck.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tnxqogtj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ezfxzefg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163gxizpfmj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163skfblfnj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163spsiecop.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163qmxcmxvg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bmczxfal.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163wyfwcsog.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163aibnipzx.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lkolkoij.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qokmdqud.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bprmjwji.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163xqqnzgas.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bpsxghch.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kvwargzb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ypettfbn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163amqiuwhn.html


<!-- 参考信息 -->