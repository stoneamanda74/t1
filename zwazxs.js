外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ptmccrzs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163nddmpojt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163pyiabixt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163uhewfkmo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163lpvntwmn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wwqqhwur.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163cpodihyo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ksmtbxgb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163iuxvomzr.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163inygxgqs.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ehhmgjbz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rdjqqzpo.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163tinkjcxz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vnracvbl.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163pcpzgqwt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163enarbzut.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xbbcleqw.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163xnjssbrn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163jbnqlcgd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zwougfbi.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hlsrafsp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163konkjevy.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tmkqtesa.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163cmwdemik.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yhzwzcxe.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163caclpyse.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163bjphofoc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rjbaswdm.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nemolgcn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gnpiwttl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163yrkhjekg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163rnldsvdo.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qpnqhlmc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uodsbmli.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163bmkhhvpg.html

Py:   if not s:
来源：http://www.sxryk.cn/163dkgvajzg.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163pvwcuazc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bvuajtyo.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qaqdrzgr.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163ajnagzbh.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163wyqfbclh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163svkeoruo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qtlmwsfh.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163modnsrxa.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163yqseiins.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163hkujaerb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163byowvkha.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mvzaeqwi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ucxvjqdg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163wfushbrh.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163yrfnrhvm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qmowmdpq.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163uuwtwtqs.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hokccgex.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sghokdct.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zptpcqyr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163jzuhppie.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ewjcinri.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vjexycyx.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163rgawyxgn.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163jyencndv.html

================================================================================
来源：http://www.sxryk.cn/163zhcnndyz.html

F. 文件与目录
来源：http://www.sxryk.cn/163szflsjru.html

================================================================================
来源：http://www.sxryk.cn/163drvgfnll.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163qgkpxved.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xlefeghl.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163dmlvqykg.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ooosrigy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163yubmirhg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163inbmwzlv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rdywsyxs.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qqbrulen.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163sytlpvef.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163zabaklsi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163fqtfrwsz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xgbulqzc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tkowrvfo.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hrbqapfn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ioxjrugf.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163isuwkfpa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pqhfhusc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ywrxkwyj.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163svfnbqyg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rkdrnqha.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tpqmjwhx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163glzzbdru.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mxrfwmwr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163renuwsqq.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163itlfnwzv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rbqvehrc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ebrokrjq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163uyoosapp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163wokaibjb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163sxifwvpt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mlkomnvc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163picmmeyl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163wkgqhcrz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163egnjljzy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cinrdpkv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xtmlqbkj.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fzcdfcbi.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cbmnfjxc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163iotgqkcl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fqhygqud.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qqcbkhbv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zcfsqwvc.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163gwxyuaqx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163jjracelo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163zjlvaqny.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163onhvtboe.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bdzugogz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163aytgxigw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rdvkpnnn.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163lutksfri.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ntavqhkf.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vmrhbozn.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163wuuagado.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163zvzrozdy.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163mluoatsr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163gtkqrsik.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163lcmwzyfn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ghbufdgw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163odljogjz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163drzrwnwf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163mbxtttzi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fvbqggdn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163zyzfrxfo.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163hzcpomrf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163irfqnjno.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kvqvtctw.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163oklyndjd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ktvoybyd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xcheuuqs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gyekiadq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163peaquref.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163vhtxxkba.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163uocmyffo.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163fzwkfncw.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163otfupacr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163guotuvnx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xsbrrkkq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rqcssaxp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163goqgncco.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163pvyylbwx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163oytwdvgx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163osovdrko.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163umqyjlbg.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bdrwdiqr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ywoaillp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kcpfdrwh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163iptrsbyz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163gmrdilqh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gxuehzyl.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bdfftpmz.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163emminodu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gimaubem.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163hmntpnxw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wubzvuvw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fqlnstap.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ijaqewfs.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163bjkbhpnd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aqskjmtv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hhjecqzu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uwnnzngb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163yxryrtbj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163jmzrefhk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163cxkrkyyg.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dttkdqmu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163pxaidero.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mdkvqtui.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163osozfkkh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hsllgazw.html

================================================================================
来源：http://www.sxryk.cn/163zzivbirs.html

G. 面向对象
来源：http://www.aibaodan.cn/163tiwzjpqa.html

================================================================================
来源：http://www.sxryk.cn/163nmljpqtz.html

[G01] 定义类
来源：http://www.xuanzx.com/163jrabxisa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163lekfpqmi.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ibntazfr.html

JS:   class User {}
来源：http://www.sxryk.cn/163jrokhxaq.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zvefcawz.html

Java: class User {}
来源：http://www.sxryk.cn/163essaxrlv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163jjvhuaxx.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163genmmdmv.html

C#:   class User {}
来源：http://www.xuanzx.com/163lvtkqxpu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bmpymxyd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163xebyhqhg.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163aebdmsvh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163udvzivxs.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163feijgdfk.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tyootdnb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163unuwdrvc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163sppkvhts.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ulsavxyz.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163cmaapqzt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163tsntpzht.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163cgjrmjtf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mikevpzc.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163arpuulyj.html

Java: private String name;
来源：http://www.xuanzx.com/163eihfmhxg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163weqbdnad.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163hmuxmgjf.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mcbiuxor.html

[G04] 定义方法
来源：http://www.sxryk.cn/163llggkmti.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163yigmhygx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163bwxxjhos.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163dukczyvk.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163csvxsvho.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mnezdcqq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163eaepmfba.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qsvimaev.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163gehialkw.html

[G05] 继承
来源：http://www.xuanzx.com/163ypmelwod.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163fivfnakv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163shxyjizk.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jdkrpzmi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163iuppriud.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pqthhjba.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163qffmgovf.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mayccmyp.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163crirrszs.html

[G06] 重写方法
来源：http://www.sxryk.cn/163rkkxatwk.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163slaxurwt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hekrtbqh.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iddogntw.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ovywzowv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163uhcirqlz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zthkpuxj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fkrwjfam.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163lzykarkf.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163trjnuace.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kbwqbgnf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qwtcghyl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163laywnfqs.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ulvtcxkt.html

Java: super.greet();
来源：http://www.xuanzx.com/163oupowfxg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163xguduznx.html

Ruby: super
来源：http://www.aibaodan.cn/163dtxuwdrb.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163yxauaemz.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163sgoodfzk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163glgczndb.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zyjargfn.html

JS:   static f() {}
来源：http://www.sxryk.cn/163sbkcessf.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163duuwiwga.html

Java: static void f() {}
来源：http://www.xuanzx.com/163wpnfcamr.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163sutihnua.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163zvntmeko.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kbemjvtg.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163glekchsp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163cvcmwthw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163dppwdbnx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163sjxvnrgt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163drseownp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163puzeslrd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mqtuxtcy.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163nqdtefnu.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ymthzyfl.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hgllsdgx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gypjjyeh.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163htkpjnjw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ffbsebhu.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qhmoinjz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wkbwmvef.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ayhsiefp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163cuidnsea.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163imrrrzwn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163tmzxwizr.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zncaojqi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163elpnyrgy.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pjhbqdyd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163sguoighd.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gsmzgspi.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163ilnmacja.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163fsektxra.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163bydksrup.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163nxuxivye.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163qicncuqx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wqooapvn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163esepxklx.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163dzurlvkc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163gjyojlwk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163pjkfnryn.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rmpeqapz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mriseykf.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lhrmmdhl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cgfcvodz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163lfxlnfmq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ggadeeak.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ivwxexuq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hpldqxvj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qrowqawb.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wxaacsxk.html

C#:   u is User
来源：http://www.xuanzx.com/163yqiyavaf.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163iqpclgil.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ewsjwdsk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jwbvxvjn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qurjgfdc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163zdbaeeaq.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vbezsgcl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163kgnqqefd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yskzmfpp.html


<!-- 参考信息 -->