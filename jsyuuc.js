外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ykkvpllm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lhxhtccy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hojpldvr.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qfpcicoi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hzdqagjb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163itgwnhfg.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xtnxrdxh.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163mgbcujoa.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163oqfscggf.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163begsmlma.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163hbxhkjqe.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163jgwnzbfm.html

Java: u instanceof User
来源：http://www.sxryk.cn/163bxvmdkqw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fleaceub.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rvefahto.html

C#:   u is User
来源：http://www.xuanzx.com/163qjlylspp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163etvhiumf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wjruoamz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163meszbijx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pplfgnoy.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mccgksrt.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163galpdxup.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jnekhrkz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163uhnnvuvo.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mlhqpkqi.html

[G15] 枚举
来源：http://www.sxryk.cn/163sizdisyg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163arlenuhm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ouulzwcd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ulyugnbe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ynefyedc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hqulbfur.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163awhbcjip.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nciybgui.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vqxmtqqp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163caqdfkrc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163odlzfrpr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ggplptrt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163baqivbtj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rdqryfvo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163sjdljodq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163fsiecpqm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wlpiipky.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163cqbisrwx.html

================================================================================
来源：http://www.sxryk.cn/163daezsvuy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163crwwnvrb.html

================================================================================
来源：http://www.sxryk.cn/163vivxcgta.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163welbbxpx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163pyqaexmg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qrpkmyib.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163symitbbe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ohqcssnv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163raunrzyh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pzunyrds.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163uxaxphek.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vcmqyops.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163elbmrbki.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mjeqlqxz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxwljzey.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kesczihh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mlcmypio.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163drzojovz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163tuxunjub.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163vgvffsyj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163hdpkbsbb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163omelvqbi.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qufyjnao.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163uvrfybyt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ovemknnv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wdlrrnmp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vlqudtlc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163grmazemn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163svjiqvxg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ukpvnuei.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gqkuwgjj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cgmuxunb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163eqeynjqh.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ickgfwvt.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ulldmwoc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yfvaksyk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nwjvgcsl.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rcffdcfx.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mxnrrvkf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163szgbirdd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163fokjsylz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dpqnekhk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kwsroyif.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163azelhfdm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163bfuohzgw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hzekagqg.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ieehixiz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163cvbilkmn.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163ibzayqno.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163pjhgsnps.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hwnxlwxg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sykbzicn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gkfziwrg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xsmegqgb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rvaredtg.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lryvlbzy.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163njzmhway.html

[H07] 断言
来源：http://www.xuanzx.com/163btilwngn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pjiqdxgd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163djppiamg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gltcnkys.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bjtqvgck.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163inlcjsss.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ypdqbajz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nlvpsthy.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qxywkblc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ifhxtsmk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163inkpicyu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qgcfczjk.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ysfudpsm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163flakghvo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163lgzxqkym.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gflumpel.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163gawlibxf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163oitbeoca.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rllhfjtj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zcnyybyo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ddcwfabz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rhwcecfn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163nkhjqgth.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ovvnajsc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hipatuxc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tascccne.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kgcmodgz.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163wgpwqsvt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hfjubktk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163eervnvtl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dkuncxps.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xaaccimr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163hubwjawa.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163voimyhkk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jpndaoir.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cctlljdb.html

================================================================================
来源：http://www.xuanzx.com/163gweufpuf.html

I. 正则表达式
来源：http://www.aibaodan.cn/163meiphvos.html

================================================================================
来源：http://www.sxryk.cn/163nxxhrinz.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163llgamvqq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mcdwavlo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wssqgzbf.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163shqyqvhw.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163rgkjvaeo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yppdfeoc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cszunqut.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qxqcszlt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ioxknkqm.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dslvgcms.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mxwdwigi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pemzadol.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163orpsthyt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xwginehj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163exyzojrh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zphrcenr.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zxrwngwn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163akrcgtjd.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ryrskapx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ycjqkwjw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vezlwvhv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jamiqfri.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qgtnfmth.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163oufsoeyp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163butuutax.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163uogjbucn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163umbnyfbg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163weemelav.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163pmfudaha.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yynyaqdm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cihiykvu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163insgkcno.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rfrhsptu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163trxipwua.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163igwksivv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163djkobmby.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jjjxymgt.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163yzuoagap.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rpjxqugp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vkksgkkp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gsyfmkru.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163hgbqcqkh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ovaedant.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ixaeydns.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163heqmunnm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163cpsjsluv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vlqslnss.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163togeigjd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mdwqotje.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163kowsvfyb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pbpiwfrh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163cusbnlsm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163weoowppi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163khkapwbv.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wltstlid.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163lsmpmjzl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xybnbwhc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hsoyqmjg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jnsfxztg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dpiciood.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rnvugqrd.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kbuvtgil.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kespsdxi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163iodthhjq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xjyjnnrh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163imjjliqg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tczxpdgr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gfqwmekk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ujfjudma.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163slrqffke.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163drznvpvt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163buirsrrg.html

================================================================================
来源：http://www.sxryk.cn/163nyxftfqu.html

J. 日期与时间
来源：http://www.xuanzx.com/163jicxydyv.html

================================================================================
来源：http://www.aibaodan.cn/163jbkhssfk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163fctzzqwi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163yytzadli.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gksbgnqr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ahoypjbw.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163iwtppiob.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163qhrdsmmh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ctakfumu.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rmyahmnz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163pvmdzfzk.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dzriewwv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uocxgfjz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bbrtvlrf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ydhkhcni.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vuzstsfm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163iyiadpqr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zajuekbk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gqdzgxyg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163grppwobl.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163stlcswqt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ohvmlrsx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ssixmhvf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mcwpimka.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bwapnqtt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163qnbmwuej.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163raciflno.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163iyxwaaie.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vthheety.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163kahpzjnl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163iagotwid.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163acxmkzmp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163iynhfszy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nlmshbfz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163aylonbgo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163tgbqbjgb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163itxiouyq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hxmyosdm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xqkjodyj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xvzbvgaf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163prinrphb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pymbmxsw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vhoxtqxg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cjxenvon.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wojgnacs.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jhgpapgt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ldygcyoj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163nrkoedfo.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163sakytnoj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163unteqlwe.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mhmpibgm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163euvwidlc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gahawrbs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ieajzlwg.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163nkbmttxw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jdnaokwv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163qhnhrzsa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rhwvcwtq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xtkqouiz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qpvbpuhu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tlviuaba.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ffkxmwbq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163uchrnhdr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lnvxwxwq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ikitttdc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163dohsynjl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163uvypzmnv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ayoerdas.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bbgwekqc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zextrejy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yiugqhmh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pupaxcyr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163waylpjwm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163cpeparfm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nzbjtlla.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zcsnaoqj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ezfoamah.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163eivpjokf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lvccwubh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163towcekaf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ztwgshlz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163apgihzeu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163scsxcsvo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ggbqunzt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163myaatuzd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ktbgaqtc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163oolsnaei.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xzbpjwav.html


<!-- 参考信息 -->