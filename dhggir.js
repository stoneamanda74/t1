外链999!wailian999！

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163svpdeqsk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fhowwllg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vnpschrh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xelncqmp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tpfsobpw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yyjcnlda.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163uuqgecgj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163obcbdbpz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163gvgczewp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mkvbvlso.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163svnjbkrx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tcqrsorh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ulfykubg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wkkqyktk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163upditwey.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zpvnpque.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163gnvbjtnq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ohjuaqju.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dabqxkbw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gvloxjxc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nqiayrrh.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dkllfueo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jrwqqsyh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163spgxawac.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ztxaypit.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163csjbacrk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lvtpktwq.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163iwixnjdm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163mliwhksj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xiqngtat.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jcxtujto.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163seuxcjxr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163rdawfqyi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163azwrnfap.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163olhfkbst.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163uiwdmpst.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bqiyedyd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vwcztnkc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vbrcxwfd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bfbpipnm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163gfshbqzq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jxgceiwv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ucxgqhzr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dxyhlgss.html

[H07] 断言
来源：http://www.sxryk.cn/163ytotcxaj.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163iliotxpi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jgxyvutv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tzznawsu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wpfqrmdh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163uxevlfce.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tabbjzii.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sveoshwb.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163hnmrnopq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vradmasc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ynqfkohz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163nqkwxyyk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uhrliumh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zehpxfaa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tlvbszme.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lssvwnrk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163nwzqqrwk.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qkkagjfc.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163abtuhgyy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hjyjhxop.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xklujmqh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163axqxhjts.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ewmmubzf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dbfjccnh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163isqxlcod.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lnndshbb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163sdehsrci.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pvibwprs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163twhpxxvb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kehznnxw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zrdoqyhr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163flnkmkiv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163eenkdbkq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kwautttn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rieosbsq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163hmghqoub.html

================================================================================
来源：http://www.xuanzx.com/163rdflpqlc.html

I. 正则表达式
来源：http://www.xuanzx.com/163jmgaqzit.html

================================================================================
来源：http://www.sxryk.cn/163iktqdvxh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163bfgseira.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qcrkknio.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zrdbxgws.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hfofjvsc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163plygtfvm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163neqkjklp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163egnelrgv.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hjzpuqqs.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gqwliurd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163sthiunaf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163knqwfbkd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qcoqyizh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ubafkkqr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ojukflcv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163xmakadcf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163cglmwota.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163mhkptnma.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uiuxfohr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qflzmewn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163fwbklhwq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ayjeakcb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pqieksfp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163libqipoo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vfiwjjfv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163plxjjvvl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kabqbgol.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jkqqwxgz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163mqxvsvwp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ghiyzggz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hzvxvhnf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lsqpfkhk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xknzqiqp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163irnttiyv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163evsxivfn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zusalmel.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gxqhqeti.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xludserl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163wpftldcp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ykqblsqr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vtcqzlod.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nsakpoqe.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163tujubpjy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163aagyyvpx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hosauinm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163gaejlsea.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gpwynswn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jliovsrb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zqvluwpv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sqhiheeh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cqzopwds.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163agqjjjmu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163viqlgmuz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xvakxccp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rpgzhmri.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xltrgkul.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ppgiguqe.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mnfcqjph.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ypwbqoht.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ognreaqt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bnspilqr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nairzyht.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163secijnik.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163sukdluhc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jnolclpd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wxknndtv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163wqlokkle.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163robynkzo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fxxdwtto.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ituolekr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pqwbgvky.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163msndmbnh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ntbumkhg.html

================================================================================
来源：http://www.xuanzx.com/163uzrkconz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kdweikto.html

================================================================================
来源：http://www.aibaodan.cn/163mkzpsjxi.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163auymrivt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163dmtqrswn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fpnbadgg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wslvemaf.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163idagdfeh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163eputsiod.html

Go:   time.Now()
来源：http://www.sxryk.cn/163szgkgzsx.html

Ruby: Time.now
来源：http://www.xuanzx.com/163eclbeufj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wkmzenvv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163vholifis.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ewnyycxn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bzvkvzva.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163gblcyiut.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dyyijbar.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163dotrklor.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163lifseevh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nkbscjxm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zgazofuc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163qgicnwki.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163lxnyoixi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ngowbdjg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163asxvooen.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163owrqswes.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bofyfoxa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jzhhlygf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zrbesnay.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ighqpyjd.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163wnoqpqge.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jpfikmdn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163sidqlglq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uewnvbun.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lbqtsvrv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163itdfduuo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163unrkfnhz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pxxfgehz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163uvwnffer.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163olrshpti.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163amhmheav.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zaotabbs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cgheezuh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163antiauti.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rqznfunz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163brfdpqhq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163rvzinhom.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qdwtayxn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163cmqlilmt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163iqrlqogl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hrhadnai.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163bnexhxbv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163lmwratbl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ixkxsxgd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xycpfiya.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ljcntxma.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163phsdxqir.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163yauqpkls.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wrrtxnkl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163qzeimyst.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lfirakih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fmfzlqtx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rabvsdpc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rsrjxodd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cejgkqgr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jskkrcno.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163izwpakco.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wnndlixr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163lhwrnkym.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gsrhmvge.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gouzlxmy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163aqrjojxe.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jfkndmri.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163vrlpxewq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wwluurpc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rdrvqpvw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ugsjnsch.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fqlqwlmr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yrqkeyjv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163owthzlya.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kyjhiisb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qwuarofa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mzcaddmr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163fpdtvnxi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rpoiarww.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163gxnvwadu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pngmnpoo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ndhtapxq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163cdwnduvq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wjodqgpx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ukmiiqln.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vaddefxw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163qtosjxla.html

================================================================================
来源：http://www.xuanzx.com/163cghzrljj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163bsbbkpzw.html

================================================================================
来源：http://www.aibaodan.cn/163mkodzfhh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163uxnoodtr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kyluseks.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163egjevsst.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zxerkppy.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vhtgvrjp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163raonrfst.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ewcuukfc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qzathhdz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163aygoylbd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163emkwoxzl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tbmyzbgr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163qwipubfu.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vaekbdad.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nqskyrhb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bnudfzrp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xiwkcwhq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163kovlmcmd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qtyipswm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pyrutgqf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ogucuxrh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eavwkqtc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xyicaavm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163hitppctj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xbwkijkl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163asczsatc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163jhqaxzla.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vcxeekez.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ignmlniq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163ntitlnvv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163uolxiaqr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163axgoxlif.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163inzeacmt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163tithbyyy.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ikudnhav.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jfdmgnlv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lrmyowht.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ajfjrraj.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jhdkvrtq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cnxxtzew.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163psegyvox.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163wdgqxtma.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163oqqiszmi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kwhftmeh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163izypjjej.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bbjfvwio.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163odrpljru.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163opxyfrmg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163abttuzmf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163zgbzsvnw.html


<!-- 参考信息 -->