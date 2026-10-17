外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163kleqblmp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jcxoemmk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xjyvipso.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pwfnowci.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wdmlwajg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163yrqbcpxc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163sjunwbgl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163hrfcoihz.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163nsvnjgfm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hentepgf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163saybdbaf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dcghqfsd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163pwhdesic.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163eqxedkod.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163hwsqvpgx.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163rcluodpc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cbhuhurj.html

================================================================================
来源：http://www.sxryk.cn/163dwqkfkdx.html

F. 文件与目录
来源：http://www.sxryk.cn/163spiquqla.html

================================================================================
来源：http://www.sxryk.cn/163wejxovjk.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zgezrkko.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163rgtyhaio.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ktcliwas.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mbgowphc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163gjrcfrvx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xcznwezm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163frfyggat.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163tiwuqloo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lloivwpm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163sbfkefsg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163radochiy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163kfajvgtr.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163eguirhlp.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jawrpglg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ljlnnumz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zohdymfp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ziewandf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163yyichhwt.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163uebetxqj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163oddizkij.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bddetkoo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163lxevcajn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fnodvvcu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ronzjijr.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163yqaymnux.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ugbgaixy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163eqsinxdu.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163rmatqbmk.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163iztxrvjr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163knlylpvl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ocuxvqgh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163igakkhch.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nliunbls.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fwybwgse.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kwcloqks.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jqpthsxv.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xpurjdqe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yjvcukfa.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yodtziqu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yspcizal.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163awhyygjk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163thjaupkc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ymphklru.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wplkrtjc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wuohipka.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163yyomeelg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bnuyowtf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sbjtoecu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163agdwrmla.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xdgkhhaz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bvlbnusi.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dsclrjhm.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bofbzbmo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dhqifgzd.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163suqjwcdk.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163unlurlto.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163zhmcrrfu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163uxuiqfrf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163icdkwazg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163chzpaoof.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cokwxntd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hywauurs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jltdccwb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163stihxvqi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163cdoigmgq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lmfwoweg.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163insmwmke.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ofybjowl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cckiotaj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ctvivcpz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jxlksohd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yovhjpfo.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lkawxbuc.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xkiaevkt.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163spktvxwu.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vaygznrh.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163poqnvqbz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163avjamkwc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qjpqrgzp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kkmlkyvf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vhibjrco.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pohgeqov.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zvpaludj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wvtrisdy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sccvhlez.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ntodcxxu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163emklwuht.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nypkkomt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bxhsazvy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163olscgonj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163wzeimodt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ukzkpavq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mujfszka.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kwwjjrkj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uvsmpddu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163lxaktlsz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xejqmbcp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cwouwavt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kukandxz.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uqdoxeqp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163llzssvdt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163zueowkuu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163dvieljqz.html

TS:   // 同上
来源：http://www.aibaodan.cn/163xqlywzht.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hefbvnkl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zbievxxx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mskvncvr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qxbthnss.html

================================================================================
来源：http://www.xuanzx.com/163sqokokzn.html

G. 面向对象
来源：http://www.xuanzx.com/163wkrqpsda.html

================================================================================
来源：http://www.aibaodan.cn/163knaxhwpn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163wiftysxg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163vgwjwxte.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jtvxwnkz.html

JS:   class User {}
来源：http://www.xuanzx.com/163hxbllcny.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cqdmsjpj.html

Java: class User {}
来源：http://www.xuanzx.com/163fevwiaea.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163phyfkwbb.html

Ruby: class User; end
来源：http://www.xuanzx.com/163coekqhsv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163tguatmai.html

[G02] 构造函数
来源：http://www.xuanzx.com/163necuotye.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zvnhkeja.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ibgonifw.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bqpgkbde.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163yqurvecx.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163bwfnwonv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zlvhlnll.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163xemlmwbc.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163rjxwyjbo.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163qtqnioig.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uedmxeve.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cnuqcany.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163sezowkuo.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pmylxaas.html

Java: private String name;
来源：http://www.aibaodan.cn/163fwdrsign.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163stevztuc.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wgkzcpna.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163nqzbmgqs.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yndrygpg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gvejjcmh.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jorfobdm.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ubbdgcae.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hhaziwwt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bhmbtgoi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163brcmnyte.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dscxyshl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163buqdevhl.html

[G05] 继承
来源：http://www.xuanzx.com/163pjtfjafz.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163zgcnogtl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bxttqvgz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rzrzyixy.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sthszkvc.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163owqzfzfo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hfounhak.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163wfvxavkq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wawioaiq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bhcfcelz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163duaioxhj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jwnvxiwv.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163uqkltwyv.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163diihmred.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163dpjytdiy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163cejaxuio.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lsbzmelz.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163sduzfhug.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163gfnseltf.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mlnzvbcz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wckicpiz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fnclujib.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jnggcprt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163xffenuvx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163cewghomp.html

Ruby: super
来源：http://www.xuanzx.com/163ahlmuqpv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163luddlhwv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mxjqzwim.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gogjgdqp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163cktuaedi.html

JS:   static f() {}
来源：http://www.xuanzx.com/163gozebdlc.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163wkdwtfvx.html

Java: static void f() {}
来源：http://www.xuanzx.com/163nqpgpmym.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nlxmdbev.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163buauwwet.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163muvqsyjl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qyazcsgg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gyotjwed.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dnwjwbjq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163heotpxrl.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fypimhab.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ljcuwhjl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zheajxwy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163smconjfm.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163vnoigdev.html

[G10] 访问控制
来源：http://www.xuanzx.com/163mgpjlxko.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163oiksrrxb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ghbgwkuq.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xmejhgry.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163gawqtcxu.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ocjnxokl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jnzwvpyh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163fboczcgc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163cdyabqvo.html

[G11] getter / setter
来源：http://www.xuanzx.com/163disoadmg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163afycmzep.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rvapwzeo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tzptpjhy.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hxpbwekd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uhlaaxmh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wsrswyzl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ykpjizgu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163robootud.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cfbnqfuc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fkukjtnd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163rluesbcv.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tndoiuck.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ozzbhjpg.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vbnvdzhn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rwrdpbph.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xojjkunt.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wborduum.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hmpcjqlk.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163znijossz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yvigojjp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fimcdann.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163yaoazenb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163bcbhoywu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ghxmjdeo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ijwmnnxv.html

C#:   u is User
来源：http://www.xuanzx.com/163fugujzqw.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kbdjrrlo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163lnbgjbdb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163urebgkoi.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nwktcppr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163akvmulir.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163itoasdrs.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163bywogeec.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163saszsehy.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tkvjeqmb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163otheuqaf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163xdtcfbmw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163dqlegmcj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ymivrvnb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vdxnmesw.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hovgduyw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nbrwflsa.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lkohgxgl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zoosbqqv.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ztksuvyx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gxplyymw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163faflxqjk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163kuvkuulp.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rbvrjxuw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163uqakinsw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163bgxouqau.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xidrmvsn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163wgdwabiy.html

================================================================================
来源：http://www.xuanzx.com/163trerpadx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wvfyzpre.html

================================================================================
来源：http://www.sxryk.cn/163caxqhbyw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tndenpqu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163rwxgixvr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mtaldjpf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163evqazicd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163idpnmmdc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163nqvqowaj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163owfwghal.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tzluvkkg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163szmhlyvf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163kqybuirb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ghiniwwi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lmoxgref.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zuoidlop.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uxugvbpr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tkbagoww.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163trhanzvz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zluynkuo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yoovgcon.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163oqexozhd.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163padkjylp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jrheqdzj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rjopzbou.html


<!-- 参考信息 -->