外链999!wailian999！

[G14] 数据类 / record
来源：http://www.sxryk.cn/163oonnzojg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163pbjuspes.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xnruplds.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ejyxaraq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fesabpjb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ohoterpe.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ucrhqqii.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163onawiryk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ohosnrmc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wltapadd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ebpfdoeu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dkiexxhs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xafucckb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ofrzqowa.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163agujyndy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163yaphossy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163vkequfag.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yyrdhrlx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163lwzrihtz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bprradsi.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mnzamhct.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163secanaum.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163aphfbtcl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ecebupcg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163okducrpm.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ynzqpirg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gujpzheh.html

================================================================================
来源：http://www.sxryk.cn/163gpwagaxj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cmmsqvyr.html

================================================================================
来源：http://www.sxryk.cn/163mnyathqy.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163rpfveafl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163yhqdocnx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163flprznqq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jkccmujc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163tkhobkjl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ekvyprpq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bylobvlb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wmouyduf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ixokvnjq.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163lcllvloc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jyyflpiz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ezabfloq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163psbwfvie.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ujhxynub.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xqwssbtr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dfzrxfgx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vvltvusl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ezudzskn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163oqohdqyh.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163apvahhur.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xdqtolcc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vbebvtbo.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163owgfhgnl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gtkqqvgf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163kwuwszbw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163agmflbcb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163khjrdkza.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163aubeubno.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163epwwyjps.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jwwpatsd.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uvidstjq.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ogxwkvbs.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gogmzmng.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163zuvuthdc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ixehyudx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163daictapd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163sgwunnjk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163avcdaosv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163alymaqgc.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hvpckkfy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cdtoqnzf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gdrfmtxu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163gjbmxnqs.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pvtgpjmy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pmvivyzg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rssudhvg.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wenssska.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ipynjnkm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nbmznmua.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163kqtcnmbd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163eaqrzdjd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qnmyynii.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xeqrjnrt.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163xeedsqfw.html

[H07] 断言
来源：http://www.aibaodan.cn/163vrnkedor.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ewytftvw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rqemzyob.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iufagbop.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ttiefwvi.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163bpvwoizk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163meqwdsye.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rbnmfnjs.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pluegazx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dpezetyd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ygyuryzb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163soqiijle.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163cdhaitor.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ngqtgnjv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xxljuzju.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163bpnfoeqw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fmrgdgdo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163uiidzvgt.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nwbwgzdt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163kjzrajpq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jniirvye.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bfphcmlc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163alokxcym.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163oclajnih.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163flnjymqr.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163czhckkld.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rpmakojv.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pcfaimvd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mjevwxwn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zdycaiis.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fxhnjxft.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fobdzycp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ynopyiwk.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163vkjaxmuj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163xaohgame.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163sbcfgkvt.html

================================================================================
来源：http://www.aibaodan.cn/163bacdwmyo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kujcxeay.html

================================================================================
来源：http://www.aibaodan.cn/163ttmnnuvr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ubkywemv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163eytrxiiw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vxclhpsj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kkiminhv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xxoceuwd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163dkwnexhf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ciyfdqtj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163svezjaos.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wvhscboj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163uexkiigz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ivgjlbfl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163xecdxddp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163eeyrrczk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163fnckiexm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jnbymxip.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163zuwnjmlk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163bxwtsqau.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163nfucqpib.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lxzndyye.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163jvcozabs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sqxncocp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hwooqwda.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rnnxhfft.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pnsskoew.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mmcvizmh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zgbhrexe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ojoslzzk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ankemhdu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fkwjwuju.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ibnmupho.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nqkkwjbp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mgspymng.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ejwlwgul.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163wdwpkjyg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163czvveoad.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163msdmtdwa.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qwpauahg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163bricmtqs.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163tworemut.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163udqgwiph.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wvhgemdg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163edyadyby.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qekaocvq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163orwonexp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dezigvdi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ywyukiop.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iciwmcte.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163hoipkifk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kvfviyxh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163uwebwear.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tkztvbjb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bbtwipab.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163octbhfay.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uzjsxlst.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163yntukref.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rhurpnxl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fgyjcowj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163cbneqete.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163aheqytdw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hwygdxnv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163hpfqkdnd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pwnewitu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163gfalvwec.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163avjsdafj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dvvyadsv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ysekwgnm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qtklhwra.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xcgjvcaf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163bpfjcsca.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gwcfjnmz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163tpwcsjev.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163huwpflor.html

================================================================================
来源：http://www.aibaodan.cn/163msywapep.html

J. 日期与时间
来源：http://www.sxryk.cn/163zesvqyxw.html

================================================================================
来源：http://www.sxryk.cn/163uwzzuujf.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163fykdknjt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163koqqawbm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xqyyjqiz.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vesstdyn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sftqggie.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163npflujsf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163payzwmbp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163iwjltxty.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jycntpec.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163iuukbupp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163awxjsgmz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163asckzljb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rbmcenjn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ufjietzh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163fngylmfs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163pcakrecg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kaypkkvu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163solzfeqa.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163msdabhtz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mjvtwpzh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163xrdggetr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163aiieqmxu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jzkqegya.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tutexbum.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163efztixro.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pzhhvfsf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wtvfxpvd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qfakbjup.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163itiwwerm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163bpgytbvv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163sxqeokgh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163caznhnjr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bdderwxj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yvtvfmpu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ikudrwjf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vmvkuvlg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xorhjkkb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163cnhywifi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zvcurqgi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iekvksxk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gqbdildy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xprsyjdc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163fzluctki.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163meqipqxx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163yrwmfsrl.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vzeuvpps.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163sxmmkacv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pebwenfa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rulmvgvi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163axkydxgp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163efyqykvn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ttohopry.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163citowvqe.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163sdnvwnsq.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tefpzzhj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mhniqzhn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xltbgpyk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rznnhrbq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aqcbrdnx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pjwjmswd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vcmhbavo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wmgykoeg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kieqdpiy.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ydxivjai.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163lwtxloib.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zalngtsp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mdatubvz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ngshlpvw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kywnegwx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163uqqkjuoa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163tjryckdp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gbkurvgj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163iwcprfga.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163nqruuqgw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tpwiuses.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iggvxzhu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163grueoagf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hsychhtu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163lgqpbceb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nlwqgcqy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163pkdkkjti.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yenuikla.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163oadhweda.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kgipizmq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163odplctfp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qtnhbpfa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163lndulcyp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zxvlefxm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163uhwpqnqr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163cphjgpxl.html

================================================================================
来源：http://www.aibaodan.cn/163xfrtumrh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ajtkgifp.html

================================================================================
来源：http://www.xuanzx.com/163gasivreq.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qviliqyy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ygedqijc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163tqzfdbte.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163iyaxwqib.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jwurrgrn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kpqgwejm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163vtygfmfy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163igsbhzmd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hygrcrwc.html


<!-- 参考信息 -->