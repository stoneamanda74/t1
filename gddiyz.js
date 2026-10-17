外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163bctsdcxo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dyzpwxzu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163napiksvf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163mbtxenzz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ewcbumyw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bjefyswb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163scijcmak.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163draraypz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163gyujkxfe.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rrnjxizw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qgrbkrmh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163phrbteys.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163aekdgrsp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163bbbegvjk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qktyddhg.html

================================================================================
来源：http://www.aibaodan.cn/163cdunjnmj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vytohjqj.html

================================================================================
来源：http://www.aibaodan.cn/163fizshqpx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163khgdvajt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ktulssws.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jacegpjn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hbmdwprh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jgtpbsck.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pofdlcrd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163piuyvamn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163hxkrnamg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qnsltfyz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163szsoirbo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163cqdwhmqb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vfibuiwi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fymblcrn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rayfotnu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yffnwvjj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163nqeegaqj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163vhacydju.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163unykeqor.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ejucbfbl.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163imazvcsg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eihxvprv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163scfxxtks.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ectoaxui.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ctlquiyw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cmgdlyye.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zkznnfhm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qsrdslyt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163biiwmedc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pvwgrouq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lpsokthp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tipwyniq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jjflmahl.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163hcgbacfq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mtlojpyr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163qbzgogtk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wdklxmpe.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rmcgwtec.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163fxsmnqfi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163yaujtjcm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cxqvsutk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wwnmgroh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zomwbyyk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163anjtvvth.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163nswcjfft.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163idanojht.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mcmaltml.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hseetvwp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rkospsyw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jrvxqhls.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zkiumkpz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nsnzaswb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zqhwdkrs.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pihdgmzi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163phkuoynb.html

[H07] 断言
来源：http://www.xuanzx.com/163ijrnhpod.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zebywyqg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xaralmom.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zbtwgnkd.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163umcxjnpk.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qsadznoz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zitkelrq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gjoppqqj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163srnrldun.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kyrfltha.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163lxonqytx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kjlsplvm.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163tavqtfjr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ttsfosbz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163txhvhtjr.html

Go:   err.Error()
来源：http://www.sxryk.cn/163drzojcrj.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163dkyfjlwo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qaipzcqj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mxupyosy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163rlmgmnlr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ladpxixu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163uuvlfxwn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tglfqdlt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163patgqwrr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163scymjunh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163pfkbtoty.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163lsldysgh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163rpwbsjlw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163szmjntnw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eezlcfck.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vjucxmfr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163akkkcjll.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163idjznclq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ppgklzow.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163cxjkbshx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163yghxjdqj.html

================================================================================
来源：http://www.aibaodan.cn/163cbldyfjm.html

I. 正则表达式
来源：http://www.sxryk.cn/163cnjrlgao.html

================================================================================
来源：http://www.sxryk.cn/163hbpaxdms.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163jvlmhuxd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jxdkivoy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ertvtdtn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wvuomyki.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nkodhxqa.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ueisropj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pjzbtvji.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bktvwrns.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163zhamgdlx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163owgbhnxl.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163gltbpghf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rsxrdcuf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rjnmhpiz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lwwvcdch.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xovanlex.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ehvflsqw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163clsmzned.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163hjhmmwus.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zpiogwkd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163jardxjzd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163itbjzete.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zglwbpzz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rljrstzi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163kraonuio.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wstdasgm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nkplvgro.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hkysghvm.html

[I04] 正则替换
来源：http://www.sxryk.cn/163kkqdwciw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mlarffcf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163voewerra.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qvfuocos.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yvfquvdj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lzqljxyl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163cxemwqjc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163zelzgsth.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uyagzsje.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vfoahvyx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163tmndymil.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163cdqwxlhu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rrvozvpi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hihseupo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gblfqrdx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163kmwthemm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163flxmjcoo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163pivrozza.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pwlbewjg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ivzczeqy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ltetyicf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qztsnwxo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tfwlpjgj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163fktqlpie.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163djmfayrn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jdbmbbtf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163enjafrcd.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fialrcaz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rqxxdree.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nqpuhhnj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163vupjqlak.html

TS:   /error/gim
来源：http://www.sxryk.cn/163zuznbdsi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163znkzqylb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gvountyp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163adopjxci.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ydxowmwe.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kdzoycgg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hdjgwkzf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rnbemvhp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nncflltm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wbkozglf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ffuukams.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163qsvzgfmz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qvsufiwx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mgevtdqk.html

================================================================================
来源：http://www.xuanzx.com/163emsvsjxd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ioqxwuwm.html

================================================================================
来源：http://www.xuanzx.com/163kleymazk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163prqnnawu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xjrcghvl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jvzflyzf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wrdanlsp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rofdcpqz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mkktlycx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163oqdgadfn.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vcehcqfw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163benosapx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163tjohgcac.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pusqoxxz.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xceonhxh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ckwbjaib.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jcjumldd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jkuetboi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zclwttso.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wvruikyj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qwteazkm.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lhdvcmrf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ydohbqvw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163gnlyvwon.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ranbsdeg.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163urkfagnn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163pijravlm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163abhzmesv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163uscrjjdt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163owvahrdf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163actmzufk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rtepfiux.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163nohcbwvk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ejdqapvs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163bcinxmsr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wjlljmxr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ngwrxytx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sqlyoncy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163elcgsfvx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163iljishrp.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163dxhkajhg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bpfzmfuk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vvtqznni.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ajothoej.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163oxqfnlyj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ttoojsju.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163irsrqssu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163aplrfwma.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163kwtlzykg.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ygassgcp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mhtynjbh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dadydpup.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nnogilge.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163noqmgiay.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163urqusobc.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dskcbkuc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zzekqjeb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bgqvnkix.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hdqbeezd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163nuqdvbod.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hjijoffe.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jroxmhde.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ksyrwsus.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gqoxrsld.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ptycgdsb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qfjtptco.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hgsbknxj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163owaplhih.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tfxwlwub.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qrznegtu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ppoznuqf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163timtevbh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jkrnskkq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xmniwyre.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163adqydfsc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163abgevhzd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ommaifli.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qhjvqrul.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ocapywgg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hwkkeclz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163aepxhqsi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jnwuizqe.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mxbnibsb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mhkinazb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ahbbrzjn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fqacusro.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xyzeobkx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uyvkdtzr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163nmavwyxg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bfzwryqq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ccxhikwg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pghdqddc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163incwjdoo.html

================================================================================
来源：http://www.aibaodan.cn/163txlwwjtc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ujyvdvzg.html

================================================================================
来源：http://www.aibaodan.cn/163hbzgdrnp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163abqbvgbn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163evcwosmj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bhumqiox.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eeezqpsm.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nxalqdps.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163irahxshq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163huunnsfp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163moxpotel.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163yzjzjunn.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vvxkyfnt.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163igljwkru.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163cpzmvqzx.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wygyqmoe.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qldmikxv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kuqxcitd.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163nynucjtv.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qmndwxqk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163cgnhfarf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lwlcvaet.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163iyawrkfj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ppcwbvut.html


<!-- 参考信息 -->