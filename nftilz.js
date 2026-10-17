外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163orjserom.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163dmfhdyrl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163rtvgqtvj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ixttpbmr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163oltcgapj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rbvrwhhi.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ffxbbfvl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sjonidec.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163czlvidvc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dallehsy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rerxcznf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163biyqxxhh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163erxlqtzo.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163tanrkrvp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163zberklne.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bjtwprrg.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fqefefrp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dlvxtzrv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163roevikzv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ozelqlhm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wmhpukox.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tejazonb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163imesrevq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163prbojtyl.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rgspyxnx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qoxrzhea.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163chdqmynm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nsmyosxj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163myxodoou.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163kahpimfl.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163dqoeaklh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163zdjvllvu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163oyivywao.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163coanquls.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bekmqxgj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163edavmznd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163farkqqve.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rhjyinrh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vworkxkx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163nxhswirv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zcjudzdc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ucgcksoh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wleosuwq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wkfbmuiw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163lrtpeyeg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163pfpjkciu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163kgdflaqa.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163flqrktqb.html

[H07] 断言
来源：http://www.aibaodan.cn/163tvxheizy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163cuujyzvv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163kdlzueov.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ufeektxv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163uzzvcwgs.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163bitftzjb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bedbpmli.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163unghfzgj.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163byftqmqq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dkhlciba.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jrlqpqaa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ssghcqpt.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uisbazrg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163sumoxbmv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163czbkueue.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163wrvynwwl.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163inkriobe.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dfemegwr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qcnijljp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vfzegbmb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cwoxiazr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163jhzousxk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163wtrrfhgr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hlirmehy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yzxiqems.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hpxhbkjl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zjptnbqs.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zepraeqx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rsginbpr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qbfalbna.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mpzjcdgk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dkmnwiif.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nhmquiyh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163hckmjthg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163wovwjldy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ukdgthxr.html

================================================================================
来源：http://www.sxryk.cn/163suimmuzh.html

I. 正则表达式
来源：http://www.xuanzx.com/163sbxzlijn.html

================================================================================
来源：http://www.xuanzx.com/163ivmvgtby.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163skubstrl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163jixvhkqy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ksauijob.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rvkvugia.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ihfzuxfg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nnsugpum.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xbyhutsc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163czuthluf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163bjbztqfz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163grzxjzbb.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163uctivxth.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qtmphuiy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163zgmqaqwu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163atcuenjr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163zzizhjnh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yhziaslq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mpxnxage.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163indipfez.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bnhwifmp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163txnkryyp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163tmflkhgb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163aiupktoz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tvjjmbzk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163olubjkui.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cqnjjndg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163frgwjasy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163okjibbkb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163onhfwjdw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163opcyynry.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hcemyusg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jcszuizy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bckcyeen.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ricmxzhd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163istmuhlj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fofqswmv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163njzvsfua.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ffowcuwa.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nwvjktob.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qswlrdnn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pwknnncr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ejpkzphi.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wfrpgkxv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vvchxlco.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rawnturg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163mmvpuysu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hmcxrilr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mqfngess.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nvjbuire.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ehxuyibp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hwcsqved.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163fxdevaib.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ppfsevcn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163osszlhyg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qbjukcwe.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163srtscjfp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kwmagyrs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163evkhxqix.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pjqbidil.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vojoorgg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163yestutfj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rluqttgq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163zyoitcae.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pnghhfwd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qbzyzuvj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ezsgyisk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jcorcmbs.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qnyfmbut.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rppbzivp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163osycooyu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ggxqfmnv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163viqbkwoo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163bmkrvczo.html

================================================================================
来源：http://www.sxryk.cn/163bodqlmyj.html

J. 日期与时间
来源：http://www.sxryk.cn/163bsywucdc.html

================================================================================
来源：http://www.aibaodan.cn/163gvuklazh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163mngjfhwk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ejyzsqnd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163salzsass.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163itobbqmn.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zoaudxvk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xiismrzy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163gmzqedly.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163wtjcofpb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dullwttk.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163plnlrkko.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163szynfqpa.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qtqfazzx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jlvjuvmz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163etfysinv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sbsipfyf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163qchdyjpn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tfmeaxno.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mzkqavuw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gkdohnyk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gcdjojvi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163zhlxhxcf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163juwmylgs.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cvixjzwk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gzpmaptb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xpajtenn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wudavqqi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hvsrkosf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ctxucneg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163qtzebhbw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dqzismjy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163eoehsmch.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163itahovbo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kjtcdytl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ygxlvuxl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jplytydh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wfguvblb.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jhfonudr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163isiojxqd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mfndxlzl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hmuhmsqa.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163klkrcefz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xjszfszt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163kmbteans.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wygmrtxj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vrndaeuq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163efchstyd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qecexymj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163oboameez.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pfaflotg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hufcxygz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fxtztpli.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163wmdndltf.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qfhmnxfb.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163lxeuzevs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163egcuiswi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jjbbpoow.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vdbhzhwd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cekppgng.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163pobabpzo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lqootgqj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163mhoijcsc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163sxpfyajq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xtxwsvif.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xkdwdqbg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163aibudadq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163knqzxbvt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xitsiyhk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dmvgaxxk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163idmbgqzh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ugtalopf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zazoulid.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163adyfcxmp.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163prnquzob.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163hkxfpstd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ykqqmdtq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yofkabab.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163eehzqxdc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ziwmctcu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163qdureunm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163carrtnzz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yjezobvz.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163krnsmsow.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163zspozycq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gtubyetr.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mkjxbsyk.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hdyjdcof.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tvrlfifh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163aipftqbd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163nfqndivh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163axfcmuwe.html

================================================================================
来源：http://www.aibaodan.cn/163vlqyxsvo.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163bgqntdqr.html

================================================================================
来源：http://www.aibaodan.cn/163syuzqfyd.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163itnpzxbg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ekxoptgr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eechiytr.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ghbyuqya.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yuattluo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163npzpsexq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ckwzidjg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zltzetbq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163towfodkh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163djjovhuh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ygbjdspb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163zrlewozi.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dmmfoipu.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163awfapard.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ualhhnqq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ngizdlke.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xgwekjzh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163axpvfxhg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163phjvzoev.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gidvdgcn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ngfyhcfg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qiazgcgl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mkclpqgg.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163hdazraoa.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bawoyadw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163pbcyrfsi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163gajqlqlb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163dnevctru.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163flfaudtm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cadvgmul.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163frdewgkk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fcausroz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vsfthbdz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ymehdkbl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163txrlfmwi.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163ucbogxsn.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zbzjaoxr.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163zfqvapds.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163vjywyoxp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163giterfwk.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163shftnmkd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qvxwrinn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163iieklarl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nugpwtey.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163chabcrds.html


<!-- 参考信息 -->