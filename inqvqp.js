外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163kxcbjlft.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163gytltpob.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hfccsqat.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zkdgksjf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163srkdoksg.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163mvbtdmzf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wgulmfgo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163xmfbiqpt.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163rrkjkrjy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ipeqvhhg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vdgnfxhv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tbrigqyw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163olgnuxeo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vuitjlvs.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163fjatvgky.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jrgtahot.html

[H07] 断言
来源：http://www.sxryk.cn/163wpysaqjk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gjoynkxf.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163bhoqrjys.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jpjluhui.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163twrtjiiq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163duvonpom.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163rikzkumt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163thxfjebf.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yceyohkg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163yemifinq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163dnqhpwcu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163huvcjnkd.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ozsykefq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ajkfhrtt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163zpqmdvtz.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163upbphhbh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rdgpuzoj.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xfsrroca.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yjtvgwfh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hwdrbyrp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163frpvoqki.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tzuqkgdj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163bvslyrus.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163sptitabi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163cldlcaii.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163zugeqgnv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163wngrwppg.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xabpaied.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163nkdmhekt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163lhjjaebn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163aydmbxbo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hkpdgwbz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rgdycdgz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163zgdrbura.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163tfrycoog.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zozwxxsw.html

================================================================================
来源：http://www.xuanzx.com/163urvshuhx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163fttpuxgm.html

================================================================================
来源：http://www.sxryk.cn/163ahqoalus.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nuduxsdu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163uhazlprf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ionihogt.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qgxisvhk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163upyjhbmr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fffviung.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163jchjxhhy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163lzebzszx.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163jnfrhcfo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163nbqmzwxd.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qacoqudt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nseyzgrv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vhohstbe.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ykhdqlrq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vadnskrj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163rawhuspu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163skkdiydy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gulxkqmq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mvpureru.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fddbzsaj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nytzabce.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163dvzmfzsx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163btbtzhlt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gccwhiab.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163amnyagws.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nyrdwmks.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163wfzalsmy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163bgbjipho.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163plbmzagc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qudfdmwc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qsjkeqjj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kzdcbcgr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jwbpgawk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kfnzeoaz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163fqexotrt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zjrtgrhb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163nrtgvsqf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163qzwrjhzl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ahiodsqf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yykdumvb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ecomkduo.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vxofyvlm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163carucroq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pbjaskjz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163cradpgaw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163itjaqhil.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mhkbznqp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rnswewbe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rayqllxl.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163owqlrvxc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hwzecjds.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gidhnffh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163jsymwsyv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163clzziwvq.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163niqgztox.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fcpslqfw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vzwcxoys.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ndemvjsv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ebtktqsy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wvhacaro.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fqsfmwxw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vzznifar.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163eqwuxhvh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sfjbshai.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lvwrirsn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uwyerhdm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fiwqiudl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vynxqvbj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163cepyocxs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jmrogwhq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pkwcvgmx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163seqmdgap.html

================================================================================
来源：http://www.sxryk.cn/163oqsfhsdh.html

J. 日期与时间
来源：http://www.sxryk.cn/163kevbgttk.html

================================================================================
来源：http://www.aibaodan.cn/163nmgrovpc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zzudxmiy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rfokyzfn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ocwyuhwr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jxrnelfs.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oanogqwc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xmajkytg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163yudlpvwr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163oafjoioa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163hkzckvvp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fzckxrgz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xkczgxxs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163nujzellu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hotcoovk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wxvpacpe.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163hucfjpzr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ycodfuno.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nvpmcioe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gyymcvoa.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kowibyal.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163asxynzwa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163orxsxhwc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xawkhydy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mwnlqbcw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ewicusqh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mxhqlvqu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jsrpcnjs.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vhupiuwp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rfmdnfmx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163hmyhvzvq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lhkfgisu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yzuwgqmx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163acqbzuzr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163piatvhtr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163iqpdvlmh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163oqeojeqz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vczqmyii.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pcbqhibp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163htwqrdcl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163iguuenvx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163azxsplga.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163tespswxa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163ailnynuj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163esleacid.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163inkdwnep.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vhumxrck.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163yzvsxsmf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163vajvutup.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wpprunon.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163mchgwifu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vdosgktl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163frmkkccl.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lbxcussv.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ifttyjxz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ycbqxjho.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ewzbthtt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qderoazg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bzvcezgm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qvlwdjnf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163szliwenn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jbmfnbba.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ydnpespf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qmerydzp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gomnmywe.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163nkzuzasj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wdjkikcf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163jwoteqvi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163drnvpuvn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rmcttkje.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163siomdgzx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xjcjoqgs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163naachyob.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163cacjbveq.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ubaunmqz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163yqdydrpf.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nytoxdlf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fjbosyeb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163fdlfefyf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163eoofdasd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bnicnbdz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163pqebafxa.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163hcyanspc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163mdxpcxwd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163txckmyen.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ugxodgej.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qstsbzcc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163whqrzkhw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163wxliaxxg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tzrykibx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163nvbxzhwf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ptfkegiy.html

================================================================================
来源：http://www.xuanzx.com/163gwsczryr.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xilqlhjz.html

================================================================================
来源：http://www.aibaodan.cn/163jooyngbx.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163bdgmkpum.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cuipvyjz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ddpluwoe.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zyqbwytl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163yvclogcp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dvdmivtj.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163smqsrlhu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163fgudytgd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fcffahbt.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xbexncsx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163bheqdxrb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163uwedhbmt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163crqeblcx.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jrxojxwz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fxysiayr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163woajcdws.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uszhdpbw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gdermyjo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kjyqcrbo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lasbnhyt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ygbpqqor.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hkfmsjgv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ouhoddyq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163veegzmht.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163eralneeq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rjyruyfa.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zztcdmio.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163eyncunvw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ooxjxjtx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ucskfhbq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jhigephr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nxcfoxzj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tqyyyhmr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gijoqtfb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jnnygwpt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163xgqnhisd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ntcjxhjb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jtvreiwl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bmvvrvqr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dhdetdlw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fufuzngo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rkkmrbuu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163onlbipel.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163kfcdxykk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qsciaflq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163lsymugwt.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gocfabjh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163gqpzkntg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pbcbcmqn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163smxyiksm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ifndqsrr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163torjvcyt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qhumadcv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163zvxqtsxm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hogixpnq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163txdqaorw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kjikvrpv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ltojhusw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mcbfyzvl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gzyhojhy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163lfsbqwri.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vvaqfuvc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ahsughpe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163zknifvcc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bjapdmdy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nfpaxzax.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163okuntaco.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rpmjldks.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xfqwuyur.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163muyloqvh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dvxidijd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163pszttpwr.html

================================================================================
来源：http://www.aibaodan.cn/163trrthsnk.html

L. 网络请求
来源：http://www.xuanzx.com/163mslvwqgh.html

================================================================================
来源：http://www.aibaodan.cn/163orxfetjj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163cnmgzhkx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163huijjsjp.html


<!-- 参考信息 -->