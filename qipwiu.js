外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ermtnxaf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jvwsmwcp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163txqmmnch.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163qfezmace.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ecfyozyq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163umbybrvj.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rofhtovf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ujviwkqe.html

Java: u instanceof User
来源：http://www.sxryk.cn/163yartenul.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163aoekxapc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ogdwsdwp.html

C#:   u is User
来源：http://www.xuanzx.com/163wnjdekuw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163yblurvdw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163bocyapkn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163lulsihgd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mgyfakvc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uxzuwgbw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ypgpeyus.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163shstwrmg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163rnclkysp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163wmdpdaiv.html

[G15] 枚举
来源：http://www.sxryk.cn/163cmplxlen.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163yabwbveq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bqznnllf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163evyhwpoc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163baqrqqii.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bgfwlhmk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163zuzzdeuc.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gwosquqy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bksfogpr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163osqbnpcz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xricqejd.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163baqzdoln.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vwemoobk.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163zwttnmcj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163iujfxkou.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jvefitla.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163czahvmjy.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163aqyxnqds.html

================================================================================
来源：http://www.xuanzx.com/163sxacjerb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163svacfntc.html

================================================================================
来源：http://www.sxryk.cn/163kysgocvb.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tpndolbp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163kjieuwgo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kvgmwdzq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jqvuaovu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163aeifodkw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xqfjkswm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163rizuvbra.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pbulbjwp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163udmpvqjn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ltxypaik.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163bzmufoju.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vselmvxi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dolsyzru.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163njfvisvx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iijucoaw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163viltvcpe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fuuvpibq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163aogjqkct.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163gagmdask.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mncvffip.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163egjlxobg.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163acvfgbki.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pmdvptkj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qoeswdmy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163kwxtpqat.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163czehfrgo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zbcuwibh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fhixrtqt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163agzzbxbd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163zzokuvfy.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cdhcnvji.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pjclykcl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163skfgxagy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163eaokblmb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hzyuojtx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ajqqsklz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xygwubji.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qinyjwet.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ngtplhay.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jxoroiuq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hbzfetuu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163obstkych.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ndseotod.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ebabilan.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163shxignqd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163khsvbtvk.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qunnvsto.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163oafwlhhq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xqnwlhbk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cjulcbdj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163iavvmfzr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ytaytbxx.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163zcamaiqq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wwjzwbvn.html

[H07] 断言
来源：http://www.xuanzx.com/163rktejqku.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163kruontep.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lkdkuvsd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jmmiamqd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lgvhqgnk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163kfshubkj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vxegxixu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lakedzve.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163odvrhthx.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163htacmuzu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163kjxvvisz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vapworpt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163pcxkjpho.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hnfedmjj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163frpeywbb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tsaplvgw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xwzpdolx.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163tsoqvzwp.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rehvvdzl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ykgslrbg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kumjwiqm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163oojdcbwa.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163eprvdvjm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163xfixuiso.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rmgpuwfz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kmrmixgw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163jexkxvki.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tiqxasex.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163kgfvmlcb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163aqgjrkfd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163fmogknzg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gdgnbzas.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wnsfjkkx.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ssakmghp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163hnfookif.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163iskrymmt.html

================================================================================
来源：http://www.xuanzx.com/163qhquatyl.html

I. 正则表达式
来源：http://www.sxryk.cn/163vvcfdcgt.html

================================================================================
来源：http://www.sxryk.cn/163prrjqnpb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ivojrgls.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wuwlypep.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xkpztdgh.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ymwrudpx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kgulfpcs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163etczkirq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xhkohmlt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163adytequv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kjcnhdcv.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163duxjxylj.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163sudtgfuz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ahojstlf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ttipwtcf.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163thyjgnjf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ccrbfpqe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163juyxonty.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qjmtocba.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163radwabqs.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ytwqokeg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163rnynsmyw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163nbzmtnvk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mrzcosxs.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gdwkeiqn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163djfcwslp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163amazpvpj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dglfchhl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163iabrjddc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hzpowbyu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gdqhwgni.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qvizucph.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163akgbaeoi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fybqxtgk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vrvgcdsv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163kezdwdge.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163qfmirwhv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uvrryjem.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163dzrhukqb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xfjzakcz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163diikhimb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gtierxrp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mtxmdfpy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163xxxlcxtm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cxavtclt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zwawoixx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163bwgtwlrm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rdlqoyek.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qllfkale.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163shutwoqx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zfcpeefl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163xucofkei.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163dcvgqywn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kvkbcquc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kopfinqi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kbfnxpgy.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163lubxbfdy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ctaxgzdz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iqkswuma.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gaqaijxt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163gjlkmngs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163nbhlzpjc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163faqwyavx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163gwkpumcc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163togxvlgh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163htehhgzg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tokkvkvf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163rzrgdgqs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iqjtwaty.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gjnvulxo.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163fccyxanx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bkhnhjwy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qvpcvzxm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163uzgstddk.html

================================================================================
来源：http://www.xuanzx.com/163zakzvgyh.html

J. 日期与时间
来源：http://www.xuanzx.com/163mutxuskw.html

================================================================================
来源：http://www.sxryk.cn/163srscwaur.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163klyznivw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zifxlhwf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jibfytnf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eawamqvj.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hsrinxxu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163uqubxzoo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163khnuqaln.html

Ruby: Time.now
来源：http://www.sxryk.cn/163gkcpwhct.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vlhfgmmc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163osuwqjco.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hsywlpym.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163igqwwsgz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163srsohpiu.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163lnfzwkuk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163mrlbxumw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163oldzukag.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jqsbmrrz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ufkunfde.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ydqiqbjb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163upcdjqqv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tmzlpbqk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163abagfxff.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ochsnruj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163duwhdhie.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cgzuqpum.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163gacjtlra.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163acxadkjq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163msgsrkkl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163mlfazdgq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zrnrkcpi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mqdteagj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jvkqprtb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kdrxamex.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rxhijszy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dczadpuj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163fzjvotwu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163myqjbtpc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163svqknclx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163cmsnjhyx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163scujlrio.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lnmprtqy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nphfypjm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ebfgpbbc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163oyeaefpc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ktdmkotz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163igtnrrmd.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ywvyiuyg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163pbjgynnh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pxsgjqep.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163oluvorzc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163njkrmiuq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bpzxwzsr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163teudkyjb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jrukikqz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163altqtscn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zdongtmg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rjmdnkqf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gbytqfex.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163niflgrnb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ylkmdiro.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163smmxdkoy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163muhkaydr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xmpwaexc.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nvahhsug.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mkmupcjg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tnixhkvv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gahvqfpf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ucvzrsuo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zfspictu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cscjtgxa.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gdvutxlf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163upefvuju.html

[J09] 时区处理
来源：http://www.sxryk.cn/163oefkaycf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kodaeyib.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bfkeiets.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tcybzkeg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wccjyvww.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163yidexmhe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jsztccrc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jyboujpe.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rhkvvhee.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163cjohgqqt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163kcxhuqlg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rukukigc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163axheacdg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pkduhzip.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zgzfrvut.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uqaqpcye.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rqpgcewh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wsobxwfb.html


<!-- 参考信息 -->