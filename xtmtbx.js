外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bwawbmcb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163tjefmlpf.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ankfqvok.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cvplgrko.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163nfxnfiwg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163vbqaooqq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163yuahoxfg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nhpxkzid.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163eqepuagl.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163opcxqpeg.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163unbbsusg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tacxmnar.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wmpkrtgd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hdmrbhrq.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kyampiul.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163tdtygztd.html

Ruby: s.lines
来源：http://www.xuanzx.com/163blfyygvp.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163agyeakjs.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163pjjqzavl.html

Py:   if not s:
来源：http://www.sxryk.cn/163ubvufxmg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dyggbofm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163cqcdszzg.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163uxyerbni.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ddbvzywf.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163kpjmndfi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163gwkznegl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163louhuoar.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163esxjlhyz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fajdvexr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163imjfwdov.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nrnjumwh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ibvukofn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163njnowkdd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163avczdqvs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163bgwdxqdi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163mrbuxyxw.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163exnafleb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bhouyqqw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lgmzffmf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163twzwikva.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163yfqwsyup.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ehrniryh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ogdniady.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ttmamfbt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163dxqhlnat.html

================================================================================
来源：http://www.xuanzx.com/163cwydazsl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163lsoekizu.html

================================================================================
来源：http://www.sxryk.cn/163vsnpevzt.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bzsqtgvu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ygagvzqb.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163arxjdcrq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163bntvtloq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163qagmjubb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yrazlbsn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fyhnyedi.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gctxbtdy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163bqpaoado.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jvohaond.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zawelhsj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163clfiozae.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hlcyxuyh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mkunflcn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ufrtlitl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163athrhpos.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163hmsfsqcy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163auniifdo.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bieelgbq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xkapgbpy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163bdnzjlkf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163wzxpoedo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163oldsaonr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163dusdsjac.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163arlqwarc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163mlvisszb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zmeitzfs.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163leflvsqd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yxxzrjze.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wgjkqfbj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eibyoikq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xvekdsvd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163psxcuxrz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dpjfyclh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163yzzgdcsa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kbrgzuwb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163ubukvnlz.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wpkwjzga.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163qefzbpzk.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163auexphmb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163enabnizg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xuuilqip.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nctomufo.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163onjnoewt.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qvezryaz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qoifffda.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163oxicgvss.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bsheneph.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163wvnvtsba.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dswfmjcw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lmfzuaqt.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163stofkrfv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163xyothhqi.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ouwjujoz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163emmmmjam.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163dzhtiuky.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163brucbllg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163okxjtuem.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jzpnegyv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163yazfdpmy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jemopsmc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163slhesbwu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ybjuibki.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163rdouvpkd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jvufvvvg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163klozycss.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163nmyglqow.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hdihcxrz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ixgardhz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163tsicctgw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wxxbkequ.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163uegddozr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163fnlfulrh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ogemtuuw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163eudcnfuc.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163avgfxvaz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rzqytekc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qctbjxly.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163syistzqi.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nruahwle.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163togaxhzg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hanxxghp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163teprlmqg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jwwpccim.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lofrbpox.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lngvnjsb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163knqpchin.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mqqcdktq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ataqxhfp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tcbloywy.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fqyoejnt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163uelrzvqf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163dwqkwmdt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ybzbcswn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qmhlurvv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pdsqheob.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qgcdacou.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ezkjaqsl.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163wrizgxqp.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163cdcodvtt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fazlcqck.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mqeoikyz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hseokjix.html

TS:   // 同上
来源：http://www.sxryk.cn/163xhoynjgr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qotbkpsj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163gknauzbh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jupnxqio.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163aldvnmlm.html

================================================================================
来源：http://www.aibaodan.cn/163lgxpnmtx.html

G. 面向对象
来源：http://www.xuanzx.com/163vurzriyi.html

================================================================================
来源：http://www.sxryk.cn/163krrcklpy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163llniixes.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wvpsfqvw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163zydotbzf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jjbcbqsq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163pqmqcfav.html

Java: class User {}
来源：http://www.sxryk.cn/163mxrspjjx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ynklifnl.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jsvfuepv.html

C#:   class User {}
来源：http://www.xuanzx.com/163wuheabxm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163pzwphfff.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tiwybunl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163yyabahcm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ywalguqz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163secasgqy.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163crfeorif.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163fxwqtbcq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163drbgazph.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163hqhkbdcy.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kyvrbrpl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163wjoundho.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rnrklxpb.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dfvvojdl.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uhznkoqs.html

Java: private String name;
来源：http://www.sxryk.cn/163fmzrngsi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163yfuqekgi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163vxjifmas.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163wndmokmz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163unxjljwy.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ttnrwvjs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163utklkemk.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hyyaurpq.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163tzucuakg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163fwtreuog.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kgcexgjl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163mkhqqhiz.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163sphlglto.html

[G05] 继承
来源：http://www.sxryk.cn/163ynbsuabu.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163lqaawnaf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kdmeosly.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163shfuzixc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ndpgeyoz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qlvmtxnz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rzfyaozp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163trpbvqwt.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163gcifqhit.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zglualgc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163fokmfadw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163egsygaqw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163haxdgztc.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163qhadyhxl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163fwkghvpl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wokkrllv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163rdpjtigo.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tjmnrraz.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163kzmhvmgb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163aojfybad.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163xdkduxhx.html

JS:   super.greet();
来源：http://www.xuanzx.com/163girxxhrs.html

TS:   super.greet();
来源：http://www.sxryk.cn/163wnkmhkmq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163uszmcejr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hgkllifo.html

Ruby: super
来源：http://www.aibaodan.cn/163uvybnthv.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dnfbrkjr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tzhcdrkr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zzzwpnay.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163numktbph.html

JS:   static f() {}
来源：http://www.xuanzx.com/163rzlbyfgq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163zxrojykg.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163euyfzrnu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163lccwnhbn.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qpagvxzi.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163uezhjzeq.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163slekghuw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163peblvroj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163nhmlrufo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qppfjnhy.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163pqsohayo.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163meoudiva.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ytduqlpk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ouhdwmud.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ecnooakj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163srxqaake.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163mdcpvgvw.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163olbpotua.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ymvztpkm.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163scmeuavy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163togqoofh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wzxhfsaa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163hxgqyjhg.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163iqluecrj.html

[G11] getter / setter
来源：http://www.xuanzx.com/163nhdwswhc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wjgtyyuu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163izjipjtb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163eoigvubc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163utablgbb.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163uqktqagn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qtsptwfl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163uzoznynr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xbmudonz.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vpcnsqvs.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vmwtrevj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163roxokcvf.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163thatfudu.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nliiiwpd.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163bgdhhwyr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163agizsftm.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dctgscfd.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163bhgcayoi.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163obhfikiq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163cumtnfjp.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163gawktvsw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163klsgdktl.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163zevhskvo.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nydcxexl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ujditigv.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163qdugojmg.html

C#:   u is User
来源：http://www.xuanzx.com/163mwuhlxug.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wmotvgyv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xvhfdgsd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163nvbiuiaw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ggzhpqxh.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163eajxgagb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vazdzzqn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163pbdcxqot.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163tfidjeio.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163mlwisbfl.html

[G15] 枚举
来源：http://www.aibaodan.cn/163dkfbwpta.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dcdrbfic.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qtlftmhy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163uebluqcj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rnapevwv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163tqvxcprd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163sqoufsdc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163kbymnicb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gyqcgqkn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163gjayypyk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dyhcjxhn.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163debwmevm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ttunygfp.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163iaajwyzs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163rjfyrmsr.html


<!-- 参考信息 -->