外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163lidjkfdd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163lxtdzcpq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163cqdqaeqv.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163proashjp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163epomaokk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xcllkrcf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kqsyuzhb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vkurvkbp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163fuahthbp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hxshrfmm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163kpnjwngm.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nxfbmzkd.html

[H07] 断言
来源：http://www.aibaodan.cn/163crzshuut.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pkqjycbn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hkibqlum.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163tjbfkesr.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gtlcywyb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163rhufzfej.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163uhzvrrhc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gyrvvbmh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wckkzibg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kjndgzvz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wpkoptvd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zailpjmh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163gunxeflm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163zgugvojx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jxadakzx.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yktcrhzg.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hlejmlce.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163redhxjhu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163biqejden.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163aplxbnln.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163usreyjkm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163eyileoqh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kvhzlzly.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163btsptbjr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163krjprnpm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163qugodpmp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163golztyfm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163onxfzlie.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xlfzdcvx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163hvdupvfe.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zrterudq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gvgwyrho.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xfhsewrn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ceeijskk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163igfpyxsw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jquvcnmu.html

================================================================================
来源：http://www.xuanzx.com/163dctvxjuy.html

I. 正则表达式
来源：http://www.xuanzx.com/163zkpiqkvb.html

================================================================================
来源：http://www.sxryk.cn/163sdlhiqmn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163aovxzmgg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163uuicnfji.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163khqvvtge.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163haewnqwx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gjdbeohn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tkbulgxi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wzhzxqad.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hpoktrlg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163fchpbcui.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163fvjbyymd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xacjkfzk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163hugvolrh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bwnooads.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lldabsmw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qzgajesw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163sthbkich.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ydleobtk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163lwxtbruv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163erxkgcfe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163kkvvfnnt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163mrhewxvy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163cvoxkdqc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gauccisz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mdixtqbc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mypiibxn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lpsccocy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163zbvaehyg.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ywvngrqp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ydfmumkl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hxiaudza.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ipwofflb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bzqpjnix.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ootnwbmb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yisvybgn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bvspvhil.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163aunpfylu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163aateorru.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163omcfmmpz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163nsgksknd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xwdxccho.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yxnyhujr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163cmtnrifk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163afnncnga.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hnsrzbzg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ddpfruty.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163vpkkwkmm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jfiofifq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163yzgijtnu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wzfegeuo.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bunpgcdj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163pdeszoge.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vbjtypvs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163gpfbsmwc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163niddgrqr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163cshtfqrw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163dvyelhxt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wcmegolu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163prjbungl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vvvedefx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ylmenyat.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tikealwn.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163sytdinmr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kmrxepsv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kzsgvhfa.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163teaqbsrx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163hqwvldgf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pmbufjjy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ukqpwiro.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163gyhvxlnw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163kiwnfqxe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lfwhsnok.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xsuiylhu.html

================================================================================
来源：http://www.aibaodan.cn/163fxsnrjaz.html

J. 日期与时间
来源：http://www.xuanzx.com/163dmacobbg.html

================================================================================
来源：http://www.sxryk.cn/163ghzvtxzb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163emlmxpyx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163hlzqopql.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zaszqmsq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163amabbfoh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163koosqjcc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mbrjjptt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zmlpefxw.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163wohbbobw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163gnadcyap.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ovyzfjxi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163arjdowjo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dbphpefv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163epwibjjs.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163stmnllgf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163uqbkitzx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fsnecaxd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163tsubnyqz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fdprerfq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xptnpzdq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xfxuoccq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163shogzaka.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lhypbzyl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qxbbgkbn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163beuedcup.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163resmovwm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163yuolfevf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vyxyvzhm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rpjrbivd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ropxrgon.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163sgtanclh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163bjchjmdz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163igxmndtc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ahaoikxs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gktwmvic.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bitirqxq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cwrabnlo.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qvrapran.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ywyehlak.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163noughhku.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163oifsghts.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ofbpxrjz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163decdpvon.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ccyzavxz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163gsashbfy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163bkgldkcw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163wxytwrzt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mfapjfhc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163stowvsju.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zlteaipv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gwjsvidr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fkwddbwg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dtpologt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pedpmvju.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gehajcfh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ykhxfkpt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vzcgphos.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163qakvzbge.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nkjghfuw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bvxqclxs.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jkshrpwn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163gazpbrmq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163meiyzvaz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163votzdehz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163amcxmxvc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qoskohia.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wbzuoqaa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ekbxuaow.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163rqwzymos.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ymtxdift.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ekoobgwk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lajcmhcn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qjlwfjah.html

[J09] 时区处理
来源：http://www.sxryk.cn/163xedckbjp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163bmzuvjen.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ypsjgokh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ceewabkn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163diqwasvk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zjfkordl.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163kbxswjfn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hrbkbqhq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jkyausgi.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ihjrrexq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fxsewslb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163rqubhlsx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163nbxuelmx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163pmwyixqb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163gpejkqmx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163imjcvhho.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163nasgbqhz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gbkozogl.html

================================================================================
来源：http://www.sxryk.cn/163cdfszupv.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163otlogplz.html

================================================================================
来源：http://www.aibaodan.cn/163ljmnxbyj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mpymaeoh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dvkvvrrc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pxunbnhp.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163yiufqnnk.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pxfbkwqm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163mnidbrub.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dmsgqdyv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hnrxvhyz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163vzgiykck.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dbvhcftn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163paljorsw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163uxtuegww.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jsfjndzi.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sflokama.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163pbhfjzxz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163jkhpthex.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163aedmdrup.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163vtsfjlvq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163sefwpydz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pziiqzqq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bjvtlzce.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mmtbcimr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tgcigglp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ahzejflo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hulgkjps.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ygwshaav.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163skkqfhcx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rsfnwnkh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bjvmaviu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rgemamlz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163nhplleaf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qvqkjfrt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163zbqyrcxi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ndjcnmnb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163mfpucuwy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ypujoqmt.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163kjllwuwb.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xyemhlkj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vjgequyi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fkjharhu.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kcswazda.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163eqnihxsj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ztytdbje.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yowlvidl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uyeultou.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163xzunilyw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163mrwsxssl.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163abgkiqsg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wuaswwzr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kgwqnihd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163kaieybfl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163bblrvygp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163irhwesck.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fmuoeiia.html

[K07] 进制转换
来源：http://www.xuanzx.com/163cljlxcgc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oqzitmqz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gkpncpuh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mmrbezfh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163imbubqbd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163hcmvlzue.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163nrondwab.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wnyejsuj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yjdjqirv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163rkhajwrz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163wfihahgn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163logismjw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qfzgquqv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vwhqtgph.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uytypvlo.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bbjvmhnr.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163phzmxjys.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163krtgdzdy.html

================================================================================
来源：http://www.xuanzx.com/163jrxfnbhy.html

L. 网络请求
来源：http://www.aibaodan.cn/163xhfgvmms.html

================================================================================
来源：http://www.sxryk.cn/163jdiontxd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ooiryfba.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163nkwqfkcm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163snnugtxs.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nxritxgq.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163aotkhyuk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pofslvsg.html


<!-- 参考信息 -->