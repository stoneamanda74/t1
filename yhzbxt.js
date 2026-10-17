外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rggfiaok.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nltukczm.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163etpsfqje.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163citeeaml.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ikxzpkzb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qrbojytk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163zbswvnvi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163htysxssc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163pchitdtm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163obppaqmg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zqzuhpib.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zyeuylwg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yrhvteff.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fpfzagvj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163tvcfdraa.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xuigflnc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163whryeydc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163isyuwkgk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xeggaeub.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ntsuwwak.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wghxgeck.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163aggkhjoa.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163quohunwp.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bihbzuzk.html

[H07] 断言
来源：http://www.xuanzx.com/163hutnexts.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uluxspxq.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163incwiiqn.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163yhwgfiih.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gddxrdts.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gcksdxxw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ixksrnyr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163buqemizf.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163igjqzlib.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163xfqyghrh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163iqpwrivx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163prqacjmc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163bbocmzag.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gkmypjwu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vwigsjwp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163sjumizwq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163cbiqdfxg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163fbqpvxjr.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163oreldkfe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163yfdrhavi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163fvbbzvnn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zvcblgep.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163zwbdnraf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163gwntmoka.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163cfiriesj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163yypbpcoj.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163uxowdgpg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yulitnte.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dzsdepoj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nncddcvq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gonziekz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163iwlczgti.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163pnaqjhyi.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163rrjdqldl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163bvbeybpa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ogdwfygl.html

================================================================================
来源：http://www.xuanzx.com/163voszzxeo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vhifncpo.html

================================================================================
来源：http://www.aibaodan.cn/163tlrwaorr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163psrhuggq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163irvojidm.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ozkrqdxa.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vnfqnmvs.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ccnpyozi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zxkawyys.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qqfkjdcz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pqmtldlv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163kmqcpakj.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tzkogigv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rbtrrlwj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163yohxllrn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163spqiivyp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tmohyzsl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163qrzpojxg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xtaacsja.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163cuafzfik.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163rpgtnjxv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xdnuqpmo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mybpcjtg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163hwniswmv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ybovwapb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163bdbglrvt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163umfhtnyi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163paufjaxh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163gyuaeaqg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dpzvhdex.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rpeoihsd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163hirucuae.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vldsdtac.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163eothdxmi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163glvphpdt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163cskzqvjv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lpyyzhiq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163ueoypkfl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ynabwltt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163tinbfvsl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nqsykmce.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163klxqrkup.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163slpuwwyh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ytmcmdtu.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163pafmuhub.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163eidzkdbq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rddrjfcy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ycwrewuw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163udzuoxyh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xkuihyrc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163liatatuf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163upgvhyov.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qdcmouyp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163oqrawvyk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vwgexwzb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gdkbppza.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163aqkynhtl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163oinuqsjh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jvqlwxmr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mymvnaba.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ztkurwsq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163zvzbpjfm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163fqxhohzi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jihdhihw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vlukulhg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dfhyyvan.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163yqekrqkz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gyoxnqgl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fnlnkxua.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wogquxji.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hccxtkju.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ycpjmmvu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kpeavftf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zufhxmbe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ecpordnx.html

================================================================================
来源：http://www.sxryk.cn/163cjujgupd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dulggpio.html

================================================================================
来源：http://www.aibaodan.cn/163oasyzhrx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163oieuistf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dyxydhyi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mvvmrmhg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zasgwxdm.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tepkslhl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163plqkubsu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xipnajep.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pdksgfwa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163foqqcutc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163hmdshjva.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pqcieowo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vbjttuml.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163aprncuji.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jtycworx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163lqijstyo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163dmxkybnw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163cjxadimd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ldqbemco.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163memksfpd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mkikedix.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163tdazsiqr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fnojgnnm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vphnaxta.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163rrysfwju.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ssgovkkn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mtwogypn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ysxnjvcv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163bufqcrkk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ixmsjawh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qsfzkpeu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163iegqkgwm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gqdvcdas.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sdlkyzhf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163jofwznpk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163fagzfzeu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zbrlwvgo.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ccndamtn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163smpxqvxx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kehvjhij.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bnffwqiq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rypnqnit.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163uywdksrt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ccakkbjl.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163eyfuwmwk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jjgsllmx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163npzuiqyx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163utrklwux.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163rcdtsoot.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163upxarwtg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qhvviusp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163zqtetoyu.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fdtbtskg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rabfyatl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jrbmdtca.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nqtezkfe.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163aoejbtwt.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163dbtbkmuv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ltgtmmgd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uzgabtqf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163roqhznwm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163aweahpws.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qrwnbxtt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gmheglri.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163oujvsywd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163foqmyjwm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163weqzjklb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wwujixuc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ghtswyog.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163gjguppqm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163eswzrhtg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pbmbbmnu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163pstrynnv.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163urhylltx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wriwqqsq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cpxmwsgi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mljkdvja.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zjazqnhd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iiuikofv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rbdzjqds.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163iupxlhap.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mqajbrlc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163gjmojjai.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163qcrxiyyx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163scpgxhyf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163meomznrz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163hepepqxq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163qrcsmeyy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ejeguhzb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ebenczwc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zsribuuz.html

================================================================================
来源：http://www.sxryk.cn/163tvuqixve.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163eyahpeuc.html

================================================================================
来源：http://www.sxryk.cn/163jguojpsk.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ilzmfcxk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rsxbwpvo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pacjvvvc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jyzlzdcp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bivfvlqi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rbsksagq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163wwxmqdtf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qwjzdjnj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sgqvfpon.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jhulwxbg.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163oqbnnajv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163goyzepsb.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163vkvxminf.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gdekebtl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163yhzyvnbm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vbkcmqha.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163lareljwj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163bqdgandd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163utkbpuxb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qfcrfxww.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163tzhrumzt.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nybpvmwr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163frlunmed.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vqbfetej.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163xahypznh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uaqjzfdd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163czhmkuai.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mgwjmkef.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rujrpfvu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163krphciqx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qqhjwlud.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163scmmhczl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dnlkayyp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163othmskhz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163kqxoegup.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163efrocskx.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jhuqrgfg.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163icnktbqe.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163oemurash.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xcqzcfdk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163crtqgbjk.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xkhfmtjj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163gvnmeygd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xkwhcbsw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163lrtrrzlb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uhpkzelp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qwjrxcol.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163nkspbvlo.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163rdudqrzc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xmuxohrg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163jxstcbgl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xqppsnpv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163frzssvrn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qwfzjcme.html

[K07] 进制转换
来源：http://www.xuanzx.com/163sqbfazdg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163olnfqdbd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wrrazfhk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163iqpdmuib.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tnekyvpk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cqitgbek.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wjsxwoha.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vkunhyhx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lbwjdlcn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163afropshk.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wugrkmre.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163wuswehlm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lnkvjeql.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hipguypp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163flbjduxu.html


<!-- 参考信息 -->