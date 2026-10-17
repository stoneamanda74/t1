外链999!wailian999！

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163dykgutnn.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163xoezyitl.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ctavuzxk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xobqxefi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rxsiyzif.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163adrrosta.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ojnvijmd.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163gymydnxm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163eefweltf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163jowvumds.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tgacungc.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yseeobui.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163lbvwstol.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163znbazycf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gmdzdxvd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163cgbninhe.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163noymjxke.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yvivrjdp.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163pfzxvunt.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163acpokbzt.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pskfsrpn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163oswbaswi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163puelvkwz.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nzpxzlkf.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ubcngofq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163drkiapew.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163egicvdaz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yxecdmbj.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163repqohqx.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cyamgfok.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ffufobeb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rpnssgda.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163swwmfyxs.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163altjjlvj.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163siammgyq.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163zftehduf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163wmcnbngj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163pphnynoh.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tkuxuwty.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vaankkcj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163wydfmtpl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xeigezec.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hyniwron.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ofxxtczn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mkhkhqdv.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163iecjrlja.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163uygnbcxe.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wsnywigx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lshrmril.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163uqmpccth.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163axzszpqz.html

C#:   u is User
来源：http://www.sxryk.cn/163mjfcoccp.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tzkvhxqs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qtuxwhzl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hwjqrawj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163kbkbvmwv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bwwssqow.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163qhcowupn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ikpussjy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ykiaamqs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yivilnez.html

[G15] 枚举
来源：http://www.xuanzx.com/163dehclpxd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163dezowkyg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163rwelwwqp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163luvfxdgv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ixokyact.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163btlfmmbd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pzunzozv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hkyebyol.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jtupfzli.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163njgdadvp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163npibfhss.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163sqolqqpd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163asbavbwr.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163mlattkji.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163oktrxowq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163zjzogbmh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163rezdjgyd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gejjldjy.html

================================================================================
来源：http://www.sxryk.cn/163wjwiyqym.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mshhnthk.html

================================================================================
来源：http://www.xuanzx.com/163jqexkoaj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ukuyvqca.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fwdbikxw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163wsidohcj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163friurgew.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xeplcasl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bjuaismz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163cgfkgeax.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pvmkdoie.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163upsbtdvb.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163acrdccvf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163odkertol.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gypcjvmd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fexkoedf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qrjkmcyi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pguxxzmc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163icidovxc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163konstjow.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163abtpbxak.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163lopdbqtw.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163prpykqun.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163iywthkgw.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wzugtvkw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mjkhpujs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163opkgprzo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hpbfrnqc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qcppfylj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qmiqlqgi.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163tucnxldr.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163zlbumgvm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rdhejnmv.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163klciugic.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163olvgmoua.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fbyqmqzn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xlkpstbl.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163vzbzqtpm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163tjurdbes.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163xikszvwk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ikkgekpl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qtcfgnnd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pxeacrtu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pjupzlsd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163iualaija.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163hfkgjtyp.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163uumqpmcd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ukyhoqud.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163igdvovfr.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163shynqrxi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163bmtkgjfm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iqngkrhs.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bvgawgfg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163vosghlrw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163yqandwog.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jpnylvgv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ggcnjjxj.html

[H07] 断言
来源：http://www.xuanzx.com/163cqwoyjfd.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yvarezdj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vtqkakyq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163doizkexl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zfjnopac.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163gjjwmreq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vtgdrudb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xyltowrp.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qftfymau.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163izlckioa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ytnopsui.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qpalfnpo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yfttoqdt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tpkqfkbx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mhddymvt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wjyibxip.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163xkijskxt.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ebgkyroc.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163meypivrp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163jgzuqhjd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kowmwewz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163lvhxngtj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bknhdwpk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cxautnbc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qitqbsce.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163afstxijs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wmcpvyxp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ipedqifv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163axogbxgd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yctmbhgw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ppiwnisi.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cabdvbay.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ugdfwwde.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dyxhcamy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163kwqfaofk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163iuwvyiwc.html

================================================================================
来源：http://www.xuanzx.com/163erxxkhgh.html

I. 正则表达式
来源：http://www.xuanzx.com/163wbdqzhhu.html

================================================================================
来源：http://www.sxryk.cn/163tdyyzivm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163vlxxoeiv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163oaczoiyc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cmfmgkbt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lajyafbg.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yhmtxowh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163rtphwzuh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ekjeukxn.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vseatpcc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163opscscrw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163oekldhmn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163byzozzqr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163aefvxrea.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163mqlvbhfp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qczcibyo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dmrhkzog.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ihihskag.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qcsncodq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ovyaxusj.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qsltsqzj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dvdemcdj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vwxssktg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163dexicupx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yoikcpaf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163dxuhbzsv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fnpiwfpt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bxxwgejr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cybicymu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ydsbgreo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163trbziuoy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ouvwbuwl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iypzrhjf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gtdqwifj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qpeonscz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163ejistttd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163selfwdgy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xtvxynzi.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163hsbgkgzp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fgtvgekg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bsnfngeq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dqmurmwi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xzzoevfh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163rqovvaih.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163nksqvdsm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dpkjnpww.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gkdgkwqa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gbakpuyc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zcphmpzi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163scaehyvh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xfbldudm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tkaulayy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fybivsow.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nkuriflq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163impykayn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jumzksgk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ajalwqvr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xnlccqjh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163glwfajso.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163eygtpgrw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163tqmhitxa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zmdgwsxo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163hstablum.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163duspmrkl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zasqcxlk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qadfgqmu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rjmhchdw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kiarjhpt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163aqagnmyk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wtdozchc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163yopvytzv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wfwmqrus.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163arvtlxpa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wenxihgd.html

================================================================================
来源：http://www.aibaodan.cn/163rhamilpj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nievquth.html

================================================================================
来源：http://www.xuanzx.com/163uuvrmqep.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xzxxnnbw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163lxnvkozn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zpamvpiz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jayherqv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dvklfzel.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fntaufdm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zylfuihg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163esyucsnb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tyztznqx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163eytlrbfs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fzuzuceq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ztmcsrwl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163npxgfgci.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ydlifzur.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fndjkfvg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163opfmfklv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dgqbngnh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163doiscxle.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hfdnnqbl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163byrolhgm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163yhenrscz.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uvfdrqfo.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xruvzehq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163xetfgdgi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163azrkplkk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163xxcabjmq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163feywvqgy.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163codkelot.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pxuznlag.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163grcevivo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163otvmtmvj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ouratqnh.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163gboefegn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163cntitwii.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163cpihoizh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163lvoxlmnw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163sfbsnroc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163xkqjspzj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163pmyixamg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vozzoljz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ytrpswwr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163stfsoeaa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163yrxktncf.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163dmqgqzmc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163umlfoylr.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163abfkmxrv.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163eraobmln.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zhpmklrp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163eeywmmwg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zrvvylpr.html


<!-- 参考信息 -->