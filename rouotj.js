外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163iovudsop.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ofjgndde.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163otdodbii.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tyyjyret.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yijxhizo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hqyezmnb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dpqnufpl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163leyyszoa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gzwbtjmg.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lsoapecw.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rvfsgcck.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lwcbbtsl.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lemntcdi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163seyktxat.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163neruepje.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wctfwtbv.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163sgfkdevp.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ofchvmnr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163flsjljli.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dqwmxgcs.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163swwzkwel.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163okjdqnkx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xtesxhgi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gqutrdyu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zuhkogcg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163auizsbaw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nxyimvgz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163bicwxtgf.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jlwotioq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163vopceumj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vpmeiojc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hgxlihpa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163oqfsnpuf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ehbwpvgp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ykzbruyv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163opjsozmb.html

[H07] 断言
来源：http://www.xuanzx.com/163qaosafhh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163lydrjusz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lftsimoj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hryqbfpj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ztfftjes.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mgxpthvu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163estpyurr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163cspmrlqv.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xdjlgcit.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163llzzcimc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gzzmxnct.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163dqzomamw.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163dybaiegq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gbaibcrd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163yobuylue.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163fnxwtmpt.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163drluetxa.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163itbuynkq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fyesszca.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sjnrczsy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gkbmxvfv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163lgotbdsd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163praznafc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hzztmmvk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ljfqsssm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ntbmcagm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gvbfdzhb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vucrikkl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xletngkp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rrndcpdt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dbbqiieu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wknjnism.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163dzbezmkd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qtzachgf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163csqyoiju.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xodzdtel.html

================================================================================
来源：http://www.sxryk.cn/163ewlfqwqt.html

I. 正则表达式
来源：http://www.sxryk.cn/163xwgtbucs.html

================================================================================
来源：http://www.sxryk.cn/163gppmhrjv.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pgubrgyv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vtbimzzl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qssipbxw.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mxorntby.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dtiykxus.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163meinxcqm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163owkitzuj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163fuwdoalm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163nchkvczk.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163cklmomul.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zwygoxmc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163twbcoxhq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163uwezutzb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zgrwzxhh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163otysibdz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cdjaxodb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163xwdntzxi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163okfthcet.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hrrtqcdt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bdxqizwo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163dpelwsnn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163osypxtwe.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ngcsqune.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163barqwqhd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xzhkkjfp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163mfkeearc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163bbanfvuo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163biqkgowf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163efiuirrg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ptshsixs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163orciqhwm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xjlamhfb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mmoizqta.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ngbibwdb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bmnezlsu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163mvrdbuse.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rrpgaxvn.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zbffuoom.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163xqmprtlv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wubvvdsq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tzflysna.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bdigmqtg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bfcmuump.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nlfbwkjl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cabicqvn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163vjdsjwsx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rsfkhvpo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163obbgqvde.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ygipwtvm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xqbpvibb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ophuthpk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gsmxtwds.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163mrxecezb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163naaddqtu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163borzupre.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vnfceikr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ittgtxum.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fjergjcs.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ggbrdbqm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zwxnvqgw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163eqqdonnq.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163vbovwtfi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ttexorkv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163myhewfbd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zpqpqhyf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vapvnvqw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yktoiovh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163otiykaih.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ykdkrbgs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ntlvezmm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163uaeeysfa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lusuffmr.html

================================================================================
来源：http://www.aibaodan.cn/163szclyqfj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cjvvghnz.html

================================================================================
来源：http://www.xuanzx.com/163fifecycb.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zeanfuho.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gyhoxeko.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163lydrfgsq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hbnimuvw.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pocoeaqr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163gkhlruem.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qrvewzlc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ngquyiyk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dwsuhzda.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gqtsaewi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dgclvfah.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xphwdclv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zxzphgxl.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163yplpyksh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ncgrbmls.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mtldifcq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yjfhwyrd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163phrhivap.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163gsdfnyfr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bkgbitwm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163vntsdrwf.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zzgsarnm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163sfwtporz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oddjipud.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vqydvtux.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163tdiblozt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vhrzukqt.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163yrlhypjp.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fthcankq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163plotmrwk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mbaqxvcd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163nxtbxyru.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rmowivsr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jlpdvefg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163rhtgofuj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ylomwxfe.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163znqeqdcj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oqhfgluc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vjkukirj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163frqbkjwc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163fhlmylcd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163szamsvdl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nbckaxne.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gfnjindq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163kuodibir.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163vigdtpep.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163wyruaqzo.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163iwafjixg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rlcbutvv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vufrcgdq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lfdwclui.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163lxkipkjo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vttslsff.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ieralzmu.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cgkmaksw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163etxnrdwo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hlzrfkhu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sfwfalch.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163pkcaqdfk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163trberxwi.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vqirjvfa.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fqvlovek.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xgldswub.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163aulhxazp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pvzgmxwy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163orrudrhy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163dearushr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ojkbmssv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163glrynskb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163gmheafih.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163trmgazrg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163txhbpotl.html

[J09] 时区处理
来源：http://www.xuanzx.com/163egtuqmup.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163tlcsdnwb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ouoeeqxe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zeuectsg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jejxuhol.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pdwkgffj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163drtvymns.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163xqofzgxf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rlvreefb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163jlpbpkjr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wleracgf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rjbanren.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kattgszy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fywlytfj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163osyjmhsn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163itnbhfww.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163imwduzow.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mvzkcriu.html

================================================================================
来源：http://www.aibaodan.cn/163bxzpaluo.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jecgiuya.html

================================================================================
来源：http://www.aibaodan.cn/163qkdqmnsl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qlineuke.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163sulogzqo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163bojryfuy.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163stzystek.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vurgehhc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163anuzhsca.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lodqqisa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163uftdavkr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jiuqtatw.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163npxsejcw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ntwtjjob.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163atxvfbvj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163tpoyznrv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lxvylosb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163xzjlcnnv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fhiekzpf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163usohoygp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163forbiinm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ttiwykon.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163zhrvpyrm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dtonyfis.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iyffcdki.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yfgpobyv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vlqpwnoc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163wvglprxb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163frpjgkcf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163aeyemvhr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rcclnmuz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bxpyowux.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pnibwilp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163lhlntcmp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zblongzk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ckulfyuk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ezjikkqf.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uvsalgop.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tykzubdz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163nrynddeu.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163riujoolo.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163stcdjgat.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yuqrxxhk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fhhpwrlo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163iajiswan.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163jnyowvkr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ufzmlpnw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ttmqcnco.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163lwkzptcn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163neokmhxa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163eordxiyl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cpvskqbk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gtnndnvj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dmqgpavf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163latqspxq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163yutdfall.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tgewqiuh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zhkzgdtm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qfbluvjv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ivqvncmt.html


<!-- 参考信息 -->