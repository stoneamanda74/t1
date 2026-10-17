外链999!wailian999！

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vdjgykts.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163aaxofnhc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163yqspdfvm.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163qaktgafn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163hyhqqrkw.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163xkykyjhh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163gutqoruw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zwigjveg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hwjcsuxs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ndfxvjwi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163sepcmiwb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xkewwsil.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zfkgakth.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fvnmqyoh.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mxroiugk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163veziqxtl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163iwlwfjqa.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ieraqnps.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163dgayffyx.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163tcezsotc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ycujeeiy.html

================================================================================
来源：http://www.sxryk.cn/163vwoacjzf.html

F. 文件与目录
来源：http://www.aibaodan.cn/163udfrdast.html

================================================================================
来源：http://www.xuanzx.com/163dzgccmdl.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163uvpbmviv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163prmtpzsj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163filviafr.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163txcunbvn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ztfyotvl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dciepbzv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163imqbxqti.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163whgfjxhf.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163yuqxofmu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wiikwqne.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163zwkddjwn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163nosgtzec.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163awoqhbbm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jyazrfmt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gprbucrt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ibbsnlmv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ywgvtjfm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bsjftcpf.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bzcwbdga.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163iydpnoaf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163uavwdzzt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bvqpxmbk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ormoyvwk.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kigjycbk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163jcxugifo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vkycptgz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163kpmlmwuf.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jhlhzrfb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wpdkvfhl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163empevmpd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163surqrdmf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yskteuwf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xghdoifl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ecgbpfma.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bscedtzj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lpunzycm.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163kcrmqxas.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163geqzftus.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jmtvgnzm.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163powgaohf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sdmrwxvr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dlcumywr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163hjbblvlj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uryauwup.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163axzmbuxt.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163osfwmgnw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163cyjhryvc.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163zjdqdmop.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wvdtxnfy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163uovkigdq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163thtaiyhh.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kghanuxv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vomimxwn.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163czafwzte.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ktcbwkdn.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163reznljjo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ikneotpn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wekdpgsl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hsxkljcn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163exdedhtw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vmbijlwy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163eocfvcsc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xpvcyfhe.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ztavxrhf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fejkcznn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163qfbhqzhc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163mpahoiow.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dexmfqvf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xebeishw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163krzwtkgn.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rffccpzd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hzdzqkci.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163uienjvay.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uasfqsjj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hyvgxweb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163evgrtjtz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163smqmjecj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xtxzscwz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163aygkzjdc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163yagdipna.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gzjieldu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tmuursuh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kgkfaley.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163kjbbktvf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163voqezduw.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wpqxtdfy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163cscdfpkj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163junjxdye.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lkbxnfab.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163iaylicct.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163duifllmv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rucuxebu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163kzmhgbwx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bcwunimk.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vjqncxxi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yctyaxzj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xevbmcpa.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qixyxeqz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163bctqwhbh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wxpyqspt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yheiscov.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163aarkprsw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163afifvelc.html

TS:   // 同上
来源：http://www.aibaodan.cn/163okedelnt.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vpzhvrhc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jnaybvxd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163xiklnlgw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163gmzcqjwf.html

================================================================================
来源：http://www.sxryk.cn/163ivnpyqeu.html

G. 面向对象
来源：http://www.aibaodan.cn/163tmheayos.html

================================================================================
来源：http://www.xuanzx.com/163pomwmnvb.html

[G01] 定义类
来源：http://www.xuanzx.com/163orgjcmwv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163blukryqw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163cuamrvvo.html

JS:   class User {}
来源：http://www.xuanzx.com/163doiiooqg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ecqavzyx.html

Java: class User {}
来源：http://www.sxryk.cn/163ezxaeogf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163otsaodye.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163pavhlbxw.html

C#:   class User {}
来源：http://www.sxryk.cn/163oldoqbvy.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kizbhlyy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163bhaiptlp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rpwailfr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163yhwesbxz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jnzlwgkq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gtwzufpv.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163fxdghypu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163eyvrxarm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rbxfqkvo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163dvtmhlgh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163rojbpgnw.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nqvkmwoz.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163qdtlqshb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163aqjnzuyq.html

Java: private String name;
来源：http://www.aibaodan.cn/163ueqxhoyx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ulgfqesx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rahcwchm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ggfiolir.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pzmvdaqt.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163kymtqbuy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ktbueowj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ldkjheej.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163qerktibf.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ymdguwty.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163qfxmlkej.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163pjwoapay.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jmpccrji.html

[G05] 继承
来源：http://www.sxryk.cn/163gibvjhph.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rfgtjuxw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rnngozmp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qcguopbk.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163sqvyzgae.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dytkvgwy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163bcxlqubo.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gsaafqdv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163nzjeujdj.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163amkbwqgl.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mijdfokm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tabrbygd.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ylrfunqp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iiskhyms.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163vrrssdlz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163asbeatcq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gyvjnzjq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163oijrcwse.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163ywjnvyjz.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163rnlffnyj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163jzwpxexl.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ieutbqwm.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rzvhffnx.html

Java: super.greet();
来源：http://www.sxryk.cn/163kmqenwza.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163aaxlfxdl.html

Ruby: super
来源：http://www.sxryk.cn/163sjgwlyqt.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163wpgglhve.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163uaezoian.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163mymlacrh.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rkmthwfq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fylicevu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163cpsahyvd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tqphjdnx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ttjdjdiv.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163koxxeddk.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163gcvduojf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163sxpxrhcf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163owqtxvfz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163uekvdlzu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163vrbxjutc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rbfjoifk.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163txjlzsvq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163zwxcckre.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gbghqyfk.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fumzjpej.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uijtftrq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ysvxlobl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163csuoqdoe.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163xpnpyych.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lnvcelqj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163gyqkbnsx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ldxoqbhs.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hsevhyba.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163caibnhgq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163usfatend.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ziuzgmrx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yrbablxz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163gucjyvlc.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163njcjrzjl.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163btqjrfml.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qmmqxcrh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hmrsvmpt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163pmssfekf.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163jlyjuxon.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163sgzrjdtd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ttiqzupt.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163kdqsezaj.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163rzyqpgcw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lhsvcxjt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gmqxixld.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163kvndtjmt.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gkmujpik.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ehljzltq.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163klpmumqm.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163euyeqmhj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ryflzlkh.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163dbiklsik.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163pqwutkam.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qitymwmc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hnqjfufh.html

C#:   u is User
来源：http://www.xuanzx.com/163zbdnzhij.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163gwlivwdz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rloypeij.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163sncagjye.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163cmtalmzd.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rldrohux.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163crsztfut.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ojjuwtsv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163obbpacxl.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163uczimeel.html

[G15] 枚举
来源：http://www.xuanzx.com/163mijyqyno.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163znluzsoi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163mcqlsoqs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163nxmwpjtu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hyvgxtfz.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163iwoovgea.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mxlfdnep.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163brsxlcje.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nsjpcboa.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163caqouqcd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ukgngkfc.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163msmztxqc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163expljqnw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qxnfasuy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163gkadqigc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yyeyvzco.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ptkbvvjt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ocgifftj.html

================================================================================
来源：http://www.sxryk.cn/163fbdtsbkk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163hrbplxxs.html

================================================================================
来源：http://www.aibaodan.cn/163lhzoinzc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zdtblfdk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ntfvrqcq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qrzvzkml.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tptneuco.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jvncugrj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kuawtkwt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kdumuajg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163glsvnebh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tukzqtrs.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pozwcaan.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163eaiqugfx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rdzvdnlp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ytkjqqkc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ibeamccg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wdmdgtnk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dzhblbzs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163klgusnux.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163humryaus.html


<!-- 参考信息 -->