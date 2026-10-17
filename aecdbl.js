外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163swvgxunk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ftoqkozv.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jcigrgma.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fmqemuku.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163prbmenou.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qjywhchi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zbpycfzv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ciiwwxpe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gwttntib.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163cfadmrvw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163pknfzhsy.html

================================================================================
来源：http://www.sxryk.cn/163wdpagwil.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163scxeklda.html

================================================================================
来源：http://www.sxryk.cn/163avbvflhb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163khkftojn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gpwmssfy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163sbfxfgow.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163sipszekv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163wabxgxbl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163twzagnio.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ltkpfwtp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163rnmnitzf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163lwgsyvwj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dqwbovkx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163oxynynsv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jsewheew.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zvmhjflx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cbsuvbiq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nkldpqhs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163oivvrmvk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pnonqrwl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tgooctjk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163eshmhtyg.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163stffxwqe.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163aulilmli.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hlmbfarr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jnfaeljl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xikkjrxj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cucfnbns.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kuhygpen.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163oxdkpjbh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163heouyqgv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163mcumcvlx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163cguzijrd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163erynokxq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ntuoktgm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yuiugfao.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xunqzmov.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163kipyrgcm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fxcfmfzt.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163iryenpuv.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uwncinjn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hsldrnwj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fdmfddsc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ctbtgptr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nqughjgw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163djmnmwnv.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qdoufeia.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hsbtcyen.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wnxbpjjc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163upykvkmc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163byogpvuf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nqrqpihl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ybwhjjek.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163uyedxgmx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gkqvkkyv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163apcqiuct.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163blabisrw.html

[H07] 断言
来源：http://www.aibaodan.cn/163dxlrksik.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163rrxjxvda.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gvmrsclq.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163iifmykvc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163idgzdyjh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163olldnczx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163udwbelwz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163eosqgubp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ioowxvig.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ychwyxlb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163addbskbu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163becdeocz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ielrcqux.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163jqnayphj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163xchrayyt.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163jrconuph.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163mgqvlmmt.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zsxrwslj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163aqsvkkuo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163oyfeyimk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vfgrpwcx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xnbacxmi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163soueqadm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wogeirhd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xqymfgox.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163kxxebida.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163dxnkncsr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kwwujmde.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sjkmpukz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163urrfegud.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163obnvdqnl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163yeaiqepx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163trluweeo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kdiopchi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163pvkmriog.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163abyshjxs.html

================================================================================
来源：http://www.sxryk.cn/163ezelqtlm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163lkutewia.html

================================================================================
来源：http://www.sxryk.cn/163kopxyabc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163yentajlt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163iajfssvu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wopfvyfv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ktpnawga.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yytdedlw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163rphclpna.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nusoqxew.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163qmjeadhy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wcllvwke.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gzkeqmvh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163quimttqm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163swazbfij.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cxywahzx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163fjzntcav.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163esthlgpx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lsqlimrs.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dlxthozs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163vgasgjzw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163zwsvdtoa.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163sllckwcb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163zzrfhxyd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mvuzcgpf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rzsjwbgw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163wljosiiy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xmvjmhlt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tjbbvikd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163kpbxdffc.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ngwwgyhv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163yfjleynn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ebzrchob.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163apsmdcbw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hmphzraj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bfmemqna.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163sngnmwqt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163sfnduujl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qsobhzte.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163osmyihlb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cwsytdci.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lagatxfz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wltcqyph.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rcruwxbw.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qaqzltqi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ewwotijq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tsaucbnh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tfrtbhsw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wcffqsbl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uelffzxg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bjjegxfm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bmhslgne.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163smdxkxnt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cqmyhkic.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163krqkkhai.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ibzsssut.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ehzigtjq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qagdxlga.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163eitbfwle.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163foadibrz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163xtifskxv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163emtlfcfz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163mvbgzjsf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163islebanw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vygrqdyp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fsxyffao.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dqushziy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kzuzszyu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wypyybsc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163drspnyut.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ufupzdca.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zzjbtdef.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lvpridom.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hamrrfkl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163nbtodyud.html

================================================================================
来源：http://www.aibaodan.cn/163crxihpbc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wijubixo.html

================================================================================
来源：http://www.aibaodan.cn/163cvyycfbo.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zxjpiurn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tzkjcbgj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iipjohec.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163otziqipr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mhkmwvcn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163sklshrzh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gkfplzvc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ocxwepsm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163nltsyifd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uccwixpd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163krktoibe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163quepdchh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163rwualkcy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163lbavikmb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163svtznbva.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rpeanwce.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rtudtmva.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ciakygou.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163nvupsczj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163spcniikv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163oxnuzjfa.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163exvfnmgw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jxahviop.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zeibatei.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163nqbrtxbo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nzieuwfq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163aqpdsklk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dajquokr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zigcmuni.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163heymlxec.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163jyjjffzp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wihtuuly.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lfaecnsj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163omuhpxuj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yifynhie.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hhaafroj.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163sgjgulgl.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163yxezbdkt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163shmuhxxt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ramhgrfv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qslaejok.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lxhabyin.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163kblirtbd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yugvmlbp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163djvakwoi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vginbzsq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163nflkjqgd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cgrkuvxv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gstedfqy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163sbvdvjye.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163vgdmsrzu.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ycianmwh.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163smfghowt.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163oinfiqxo.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vzlzxezk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pxacxidm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163pfcnegkn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163enyuuxis.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163spdvjrnc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ydgqtypf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cnphjgom.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ezvnkcnv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tgdnzlyl.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ebviudgx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163oylsbflv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163euokziux.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163rmuhldwc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163iihgzrsq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hbtslnap.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163mucvagjj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ulyooyqh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163gthjzeyl.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163eaknayei.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163pyzjloip.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163zzwjvimj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fsnrguud.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qfuggtwd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163furotizi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163fqzcykxd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163trvijxyi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fbvigwwi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163skiaxnzd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163jmxxcjyi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lyzzdtzg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kgkbjils.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163sqhxuhwa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qslolpxi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lxshqvsl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lzsqcpoc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163fqmspkfb.html

================================================================================
来源：http://www.xuanzx.com/163afyzznlj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ofcfvkbk.html

================================================================================
来源：http://www.sxryk.cn/163mwperipu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bmcgqhcm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163fgglqxaa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163uvxnvgbz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nqrwdzyn.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zqkgnfwq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pmtwjirm.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ariforfa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vehdcpzk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lintmgom.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mpbgevoa.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163sumfdycs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qgbyyfyv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ycxsowxk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163palijzyo.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163xrhoxqar.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jyhefwgs.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tuhqddgl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ktvviojy.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163btwummlu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gjsnjkgh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ctdqhdev.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ysmpwydc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ujeainep.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zsjczquy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163dfbwmqro.html


<!-- 参考信息 -->