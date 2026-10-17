外链999!wailian999！

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lzvmmhjp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vnlpfkae.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uicptbpi.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hhtubsoq.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xpvgkeeb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wmoccxix.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163uphlehxn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rpfusnfj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wjexteym.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zuahcgbe.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163bwigsuck.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163srfeqsao.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vncsmqrm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cqsercwk.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xikmlens.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cuaeokbe.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jqtzkwuj.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wuytnegr.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163pswvpqne.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uznocwta.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ffxkwepi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wklunter.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eobrpffc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163njiksuzu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xgurdqmv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pfjqgnec.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163rqziyylk.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kujcwmwy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cibbrzke.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jylcnuhy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cdbwuwtn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kqgaivqi.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163kufhxvnh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163thuqqayd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163gbhtlnaz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zoipnodb.html

[H07] 断言
来源：http://www.aibaodan.cn/163fzisjqct.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hinvxxmk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163yxxbcpjy.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wspniylq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163guixbitk.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163duzpqojs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ozmlyfzx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qpozanru.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ttxntncl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163mwahaleq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163pmodjmwv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ytmxilxm.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ayemkprj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bjnfwhib.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mpgsbepb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163rtehppal.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163txafkjfm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163gwiauhqv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hohyablz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cloaggum.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163evrlhucw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163yimuepwe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ncugzcxt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163psnuwyzz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163uqaqrinf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163buvfsawh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163yxvfgkpo.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163nxjbrcww.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163aimptvlz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eogzbykh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zyvfhjcl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vywlvlkn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163eoplplwl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gbahrefz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dipmjijc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163getywosm.html

================================================================================
来源：http://www.sxryk.cn/163jtiktgbc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qyyctauz.html

================================================================================
来源：http://www.aibaodan.cn/163xtodkcbm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163cdfnlhxc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163buoevhfv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163grqrhorj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163deagqmhz.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qnbuweoq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cdetapyn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163abwzvyjb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hghjmvyg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163znalkkpp.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wumacrqq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pjlvslaq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163mhxncbuw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163sgxzegfq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163gosefrib.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163foohauqk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163axreeclx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mfetfnqf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163lhmhgybw.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lloyzocx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163njbzdheu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163taiabpnb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jcqzduam.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163sczuevop.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163cpjvovhe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163uexdomuo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lpdahiaj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ggycntep.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rihxropp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163wieyqgqe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dhpwgrrq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163batzbnbq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163naexzqcy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163anpiyzmr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tnhzvets.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lkpmtaxk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163swmlhsnq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tgxpydhh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163hhdmozst.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yrqmmtcj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163isnmjhqp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163plnomklf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163rpfqhdfq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163vnygfbit.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kmmdeglo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zmhhpueq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zptztshr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uowjcnnh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163broiqpzn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163asdpusom.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xdzgyces.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163wrlrytgk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163yntomgrr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163tchnjpjr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fiyfnglr.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wgoazkly.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163inoyjlav.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rpdzrmez.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qapbjdbb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pxeobqbk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zfatjkbd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ceivcptn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lzyeyaja.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163cnlqyggo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163rjgtncpp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163hsrytidy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163lzvdthre.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gbpmrxdc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163aryybwrr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vxtnirzw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bmwyknqp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rzvsmkwq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ezzmhasm.html

================================================================================
来源：http://www.sxryk.cn/163oxqsqlof.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bzvpvlik.html

================================================================================
来源：http://www.sxryk.cn/163ttqqnyjy.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163hzkafcjm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163wyatsyzs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zamoimql.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ktpkubct.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ciydkhyk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163nzsyhozy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zjzrrcxn.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ypnzryod.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163aengauvy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163phskxvoz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hnklspws.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163szfuftpe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cyvkyayx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dycobhmp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ixmrewam.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ixivzoxr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lvqrespi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mirpnaim.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ihnenyub.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163liqxvnph.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pbnqmbjq.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ohvdjbbn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163njzptgaw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nfvmnfvb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163glyvvmob.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qrizkbnn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163atjlfpxq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163omstzdvu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163auneeucu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163irgufibb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xamnnfla.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163nbcxzvjy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163waapnmeh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163sbpyzqxa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tadrzqzr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163jisjrjxu.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163dvchatfn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163srlooaic.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163byvycxtl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vogcbklo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xmqbzefr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cnwtkwux.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163exlmhpyc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163aiscjdus.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163npowtifl.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zjfknoqj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cbayijev.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vdkwhbib.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fylapvyv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gyinpaba.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ihknearn.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qbnxcrid.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xdhfirof.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163tctzvdlb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163duuvcswj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vkkfkeiv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cxxkurco.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pxbbqtca.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dwnrmpkt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163rytxohme.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163puwtoyyh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jbhtqgob.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163twpmngwu.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wybputfq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163gslslvvt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xgmacvzk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163gkzpqeaz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tfgkcgxj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163efnzefgn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ciynnmxq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163fieyqgvb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ryewyppp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163yrukvtpz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wkrccfcr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rmqomdbj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zwpdtcra.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ywvztoji.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163buqbezcd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163kwuncyws.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ohysdjri.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163klssszch.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xjykmxsf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jstdlvmr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kyapjjax.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ywdzwhqo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lzjbjudl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sfwcxmnx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lwxmqhor.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hlxzibjc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163khkkyuim.html

================================================================================
来源：http://www.aibaodan.cn/163urqnrmzx.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kmxhqlhv.html

================================================================================
来源：http://www.xuanzx.com/163exaoxcjx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163svrnszbh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lpsnammn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wtpankrz.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lnmiuybp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163rvysscgh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163dvdobmut.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163qbtwilod.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163jlcfeuum.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mfrvlquw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jygkdoye.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hzazvxyx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ofintpwf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gxrpyczy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cvlwsaqs.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163piklegwv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163soaiulmn.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163noudegyy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mngpeubf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163iwqizpse.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ggbuojqb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hyoannml.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163cosuhbos.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yhaovrta.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163tadmehti.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gvttdkhl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gbkhdnib.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ziilxnpt.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zmzqauhv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163msyfirla.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163hcjvnwie.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wrmzezzb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163phixvwzr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jqldkacy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cegesbvj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hwkldduk.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ndqwyglw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hmvpfyie.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dompepov.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163xufijqoi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jbckivqm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kyddjnwv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hghciejg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xszkpkkr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ffxcvabw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rmwfobkh.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163whvrwecd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163fjatmmme.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163rfssdzoz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pxpvszwb.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eyjioqsb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163yacnemqt.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rddpmjrl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fnndzitb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xiymcjmy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bhaamtlu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163zvvtgddy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163jhkxvysx.html


<!-- 参考信息 -->