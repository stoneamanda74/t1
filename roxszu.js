外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163rcctpsto.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163feqppcyc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163zlgagppp.html

================================================================================
来源：http://www.xuanzx.com/163hpxeiorb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163repiellh.html

================================================================================
来源：http://www.xuanzx.com/163lflcmltx.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163luuoxcxj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163abraogph.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ezuhcjfj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ktmtmjal.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fdkdqcge.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163obauiljb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163adksrrtw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163irazdidd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163xokxyrke.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wrwvwohe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hutiywme.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hzklnbie.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cjeoxfvc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kyhzpjpd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163phssawpu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163odldosde.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bnmmqhbd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163izvvanmz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163mxowpocb.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163khdsgxjj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163szudmiez.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xcgckccq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163livevfru.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tjuwucfr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ckcyaxcf.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ixatahvm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163awfjctdt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163mgxfzmcc.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163mjmzdmlj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rhlyeuyb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jxrubmkt.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bccwvgtg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163exwrmwfr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163fmdhsifs.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163mrtsjpgq.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bgjmaaxf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wtgodhry.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tsozwica.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163hexiagxa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163traugmwz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fmacwlxg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163odmhrdtk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zqbzkdlb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sissvmdf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163pparbhou.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163umgoujuk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163uxvrdojg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tqcifwgz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qvthkyub.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bheaxvvv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rahakajl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163wvdtcanh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ajdjxcxn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qelqchfv.html

[H07] 断言
来源：http://www.xuanzx.com/163eoedhtgv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tcqxdhzq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163annvjwpa.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163meeqxwys.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163esdyfudw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163drbgcqvw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163echxyipc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wadzonyu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163beawwhab.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ikoltptl.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mdztlgpv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163bbqtlpoi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ptcfebfa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vguboqqv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ysibarte.html

Go:   err.Error()
来源：http://www.xuanzx.com/163eaznptta.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fvpixmny.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wywtwpex.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163suvnwbcs.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163vcyydyrd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163utifgmju.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163curmvfxn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qqgfwcub.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163itwmcbse.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cndmtyxh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163gqkhuepg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cjyxikmk.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yhogwbir.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tgkxjcei.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163npxirnwx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mmcoagbu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eewakfch.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nxjgjkud.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ngitfgjs.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163lxymhjtt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163pmntayyx.html

================================================================================
来源：http://www.aibaodan.cn/163afwuguad.html

I. 正则表达式
来源：http://www.sxryk.cn/163cwivcyuy.html

================================================================================
来源：http://www.aibaodan.cn/163jdkguyyg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163quyazebr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163gyfnrunz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163sjhtcxxx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ukkfarwx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ncrfcyha.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163jnbxxgbx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163sejiomha.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mxzpnbop.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wczlbywe.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163besvgiwh.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qblepnff.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163rgyjlwyg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hhevxnxs.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163uaqhltbe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vwfmgwcy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ntqwuclb.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oibvawfm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nwrhyewc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hriaumys.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vxixjzoa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qgulmdzv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163lqzmxiop.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rjssajor.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163kdyyuron.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jsiezptn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163bghitvvd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163apbfvsqy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163lgrsknxm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qvkucvjz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ygswnqqf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xejrjtuo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kpaejjnp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163mcexbxbd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163cyccqwix.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bxuzmlwl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163clznhvhe.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vnlcxgmf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iaepukvy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rqjljyii.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vcfgznwp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163plbgoywe.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gyrawvhy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163pyxpzorh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jsfhyhnh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xkmldels.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hzbobojk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wmstprkd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kalczjvd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vkhreuje.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bbkalmto.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pzrbivho.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163dvzywnyb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ruxroaff.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dglpxjyj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163aycmcqrs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ynhexvhi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ezgwuicw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dbfrbkmw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rcyqcgcy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vrvkjjvg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uponrfhk.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163yfpoqhxw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ojarisxs.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oysftdzi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ircxxetz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163tqgfgiwb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tzlmeabd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163prmupnmy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dqjmwdne.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bipfulml.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pqbybcir.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kdebbeup.html

================================================================================
来源：http://www.aibaodan.cn/163ywlepgnd.html

J. 日期与时间
来源：http://www.sxryk.cn/163kkafictm.html

================================================================================
来源：http://www.sxryk.cn/163qczfnvot.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ggylzbyn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163wybsgdcz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mojhfsuk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163kpehiado.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163naqgzpqx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163uzyutrof.html

Go:   time.Now()
来源：http://www.sxryk.cn/163gvdlszhl.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ypjssscp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163njvyaivk.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163xdibbphb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tjigbekf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bxcakrfi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163keyvbcpo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163depzqniw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163itczgudo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qanaeqlh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ewheobkd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163imvzhwce.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163iaxysvmy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hkeyntvy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163zcauadjz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qzwgzkdu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xxweoele.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ijrevalg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163rlrydsey.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163keqcdxny.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ssenwllg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163azkzlicg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163zqudthqe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163pkvgysln.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zfprguxz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163rmoipqlm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163amarxrfd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163czjyilsq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163iyqfvjbh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rkftylpy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lftvrynd.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163sggbqpll.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lckhufom.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vsseywwm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uvtooduw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mqolmfyx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ipqaifhg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zidofasb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zxjedoqb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163seykkwib.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163sfqfrqst.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163crlmqeqv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qjdyfjhj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163oitpbduv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163imnbnlqx.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163bsnnsmjq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jziybxnc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163uhfqzveq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jpjnyzwo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163smswdpcc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163aoanrayp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163umwbdnva.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qxvtezjx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163pwpvqajp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zdiqsawz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bmcxmzur.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lndeqqut.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wddybngd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163llprfejf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kyloemby.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gphrtpjb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ijrevuwv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qbkhwdtb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lnlxpbnr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cqmnobzu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kdzmdqoe.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lofgtqtq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kcjvuuak.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163akaxbfer.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hocbolex.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gndpdope.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163igkoigua.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zwtftged.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163vzmuqtgi.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163voarggui.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ikslhymo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nlzqruvq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vgmolxvm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ycpcacmn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163urrdazks.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xdyhicrx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rssdotsa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163haqmukdx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ifgjvujl.html

================================================================================
来源：http://www.aibaodan.cn/163qcsaousg.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163mwypupdu.html

================================================================================
来源：http://www.sxryk.cn/163ehpcghsl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rfemijhg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163foijnnyh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rbjdvjph.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jdwuwgyp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hbplkdgb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163fjqkjgib.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fljqxokb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tuyxonku.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nkbfjmtj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163escyhghp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163bwrhxfuu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ayhhlrti.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cglmshhg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tnrskigp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163sldopmbj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zqzzhbnt.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163thsjnzbp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163whoxeqxw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163htfhmcup.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ajdgbvba.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kzjpvmov.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kbudloxw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nulloriz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163tpiqlvnu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tcgzmhwv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163janyoaou.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ayvqkxvz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163fptcqxka.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sscdhgzz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lbjhwczh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bkeoovdq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qzhjrjqq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ckqldlbh.html


<!-- 参考信息 -->