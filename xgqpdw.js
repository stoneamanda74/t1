外链999!wailian999！

Java: u instanceof User
来源：http://www.aibaodan.cn/163eridaqgi.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163blnxftly.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163swgpgcev.html

C#:   u is User
来源：http://www.aibaodan.cn/163itssxqus.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vxduzmah.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rrlhrxwg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ekvmwxks.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163yqlfjglx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163egsnecwf.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mirdpvdi.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mtnjbvso.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163obegjutk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dllwmzjg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ucciyyzk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163tjqizrak.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163snlozmhz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rlmblhnm.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ghoetysg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bntobwpt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163elseepmo.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zeyochms.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sehwdjcd.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163luyxqblm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163pmvevizy.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jhbmlyzd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163abapenuq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ptkzdndh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pkpufypw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rahtkzhd.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163eeiipavh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163heqtiouw.html

================================================================================
来源：http://www.xuanzx.com/163tlsjywck.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tiachtnk.html

================================================================================
来源：http://www.sxryk.cn/163lvrvwjse.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163grrdqshh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163umqjzgfp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163afmlxmwf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ikpvvbht.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163sfsbeyqx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163wxplkioe.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163zzcrqouv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163pammprip.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163yjouhkmr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163qzjbokab.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hxccbfxt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kxpejaug.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163quhtvohb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sbbuxqfy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mzuyrtnr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163udwfjaji.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ddwkoiph.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fplouxfx.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163bdrrhjhz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qzlineax.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cqfoagih.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163kwaahqit.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qtcjrach.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163btcvpoyk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163moemrehw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163prohasro.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163khnjkuba.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163qbcfewlq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xydnezun.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163cnmgytlr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gmjincfn.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ndsichzp.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hfjatmog.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163jbwkqgcj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ukmoonff.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163njifgfte.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163baomhemo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hbcghjbk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qnjjvxsw.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lndbjexy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ywliarfu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jrrwrucb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163grctimkn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gsuzwvcp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163btixmoiw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163uuxfagpf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163meutzmss.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rspwjgzx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mclkwcmt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mndfiebv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ararmweg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tnztldlp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mwglrbxp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163kcjckmjp.html

[H07] 断言
来源：http://www.sxryk.cn/163liygsnwe.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mjnjhbrx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wywjujdb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163yemjelqd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mwjbeuvq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163zdzcfoip.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mbnsxrzp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ktymokbd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zjnhohqj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hqrfdwhm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163olffhfrt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163vvdafktx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163yzgvnpce.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jbbustho.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ffzzracc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163okkydfhr.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163dtcyzaht.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cwrfqgoj.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163icfqbhkk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cjhauxxr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163nuvaxijz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jxlsflhh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vclyvtwe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yxevtrgi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163guobkegt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163myxyrquj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zommnzwq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163awzqmtjc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zmhhfkdc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163bkdnbvws.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xdsifhrl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jjdangvf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163kswzuxqb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163xgwhniau.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163sdlokpyg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fcdfffmt.html

================================================================================
来源：http://www.aibaodan.cn/163tegbfcmk.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gkiakzgt.html

================================================================================
来源：http://www.sxryk.cn/163pgicocey.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163zvefgnlh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vspskcft.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zjgplkhb.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163duaigyvs.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vxbddqck.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163emtzkbby.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hioedazw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ccmxxbjp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cegcnfrw.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bgeyiemm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163oemsisqx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163dpnefhiv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163drfeyrys.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163kcmsfsmw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wutqmiyq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jxqookbx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163btumqbhx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163xbpivqwv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hysjaabr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rupnkivb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163muiibqwy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163vjndnnsk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163swcwzjoa.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163rirbgdgv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163svvmurrs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fjhdqyud.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kpumctul.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ygakbcra.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163djvnfpso.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vaopaybf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ncehlwbp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rzoyzofn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vzfxypdf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wtacgvfv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163magrnpak.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163akzhstdq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zbazoytf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163twkkzzhu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163coucgstr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163iawrijyy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ijekexuw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163zixyvfnv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163odmlyrsm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bbjdusym.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163txabrele.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wlngxzih.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wymwqtxm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163qozuhckh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zjvdkthp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dbopbsgg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dnyedfra.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dhvprkhu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ecdguzwm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ddbnfmwe.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163betprkvr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163isncovht.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163maulomim.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163uwohjber.html

TS:   /error/gim
来源：http://www.sxryk.cn/163lkhjffhs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ijffcqmu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kinoxael.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163imrfnfss.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sljmznvr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163hyrvhfjn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xsfnefdi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xzazmroi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ymegatdw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xftgqwoo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163czjnzexf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ndagmjgj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dfisahpv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ybzdxkcy.html

================================================================================
来源：http://www.aibaodan.cn/163ccttppyv.html

J. 日期与时间
来源：http://www.sxryk.cn/163bzcakfuo.html

================================================================================
来源：http://www.aibaodan.cn/163paimvzta.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pgwyndlt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nokxibey.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mhsleywj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nhkbqunw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uvfkjzcm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ngxbvyyj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163crigdmhk.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mzfjurjs.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dfhomdba.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163zmhwcipc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kpwfrxne.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pmprrkyi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kjebifxr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163alceopvy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163dgmyrluq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dnvpdfhk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eclroycp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ybmohcqx.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ytuvccov.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zrqulqzj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nnivmphs.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ofhfunrs.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qgjvtytj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hnawhctd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sljwkbut.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zptlxqjk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163znmvauwn.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163scwwgilj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163keckikdh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pgsqxgpj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163mowyuynk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zlelhfhl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lwjuqspd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163nektumxz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163grvqrsdl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163azejuoga.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163fveangqa.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ssxssoqc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xepuajok.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vepdthla.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gfstghyk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163uspyynxc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163crbfdoex.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163tgksjxxh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ymbzmvai.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163rdnxmbie.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gsekeacd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163twmormyr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tlcjwypk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hfvgdgfd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ihnhzlwr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wqaqzdxh.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xqifzxjw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163srbjppsm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zobrshdd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163aydfcqpn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ycioddcy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wvfkegjj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vuvoohce.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bxwervdn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hdvinijs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ubugmmlm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cmibxdxj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163acdegjqm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163iuazbowr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163pzlchxqm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163itkugdca.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163njifjele.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zglcihrk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ugbggqqd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uaczkwhh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rhsotweo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163umbrqgao.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163iywagavb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163oqtiqgup.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hbyyothh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uewmdfhx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hmmbvahq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ppcfixzd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vitalopo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163atwbhkwu.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gmcpsrdk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ksqzrcdr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163yjzqgkbd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163sxrjvgce.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163yvwwdinz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163tbjevsrq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bohtegpa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163csgqqudb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ndteborm.html

================================================================================
来源：http://www.aibaodan.cn/163yyfnnjii.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163atxlsabs.html

================================================================================
来源：http://www.aibaodan.cn/163dixmugkf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163cxbwxfmz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163twakfaki.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rbavzkco.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163oqkhjric.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pzsphhla.html


<!-- 参考信息 -->