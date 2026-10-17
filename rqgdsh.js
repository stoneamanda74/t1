外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nenyferc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163pdeiagvr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qihmlqvc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163pvcwhgok.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ukizwlrp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kvubvcsg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kzxwuahh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163scizoufa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wvawfczr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163kkjjfbxn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dryjlhqx.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163nzjkhlba.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ixqwotqg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ijevdjrw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hzfhtuzq.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gvokumod.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163iosojiph.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rayadnsp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zqcbhsdq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zsuojxaa.html

[H07] 断言
来源：http://www.sxryk.cn/163lvmrugyk.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163jscrucud.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xnesmyjh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163afrtqepa.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163egkxltmd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lmgfmxkj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qcawxfkn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qjtrluwg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163kynzlqmf.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kivackdx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xoilejqc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163mxkpnpqg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qusighgh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ffvzcccd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vffyjaet.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ynictgth.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163urqcnuxf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163pirbroee.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163kogwhrod.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pubrpwvg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163iqumpjwx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zppeirli.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163mgrcvjbo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lbhgahbs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ongyoewh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163rgliomjf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gnsdyepe.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ktaqozmt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xqpvtcif.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163hfkeqemt.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mbncsmyh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163krsgpuya.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zzdhajte.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163plqhqyow.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qulwrjrf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163eiszcppy.html

================================================================================
来源：http://www.aibaodan.cn/163kcgppccm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ucpzbrmo.html

================================================================================
来源：http://www.sxryk.cn/163aezdhexn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hllrljuq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163nvwityzf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ojrlhobo.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wgfqfnxm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rhmhgtou.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zdeaegdd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rugxtoya.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163baiidnal.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zuefhuiu.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vbrkptzt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163niizouqc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163dwzcmbol.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sfqpqqgd.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163jfrtusqg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163zziyuhig.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163iknxwkda.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163scseilxt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163drbwnxsb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lbijzdrz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163meoynitb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163iiqyagpy.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163fxufzbzz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163opctjvqz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163ospiawdj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xskalbee.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qchllill.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vggzhhmt.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jalcauqt.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163bajimjyw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bvmlcdfv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163sxnrwbwe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rivnzcdg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163zbfgrswn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lmmbncsw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tcmlohpa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ksmjwisg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qtygjhna.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fwvmfyte.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163glyqpavn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gfyfnihz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163awnqxawd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jblnqkga.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163vfjpeide.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vrlktcoi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dtadimsr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163skqytnev.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tveskhfs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ctsicwcv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xnriitkg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163alqmizyg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xvlpblww.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163gltahlek.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sfvsjwoy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163loxzpbdc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xthuzvts.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163qbkboahe.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fsfesccs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jmsfjznv.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rayuplbt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qmdrhqhq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163prytzkwu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nqpbqouk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qzxfhjfv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163agpmzwjq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wkhdnjti.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ajyuachy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hutmedeb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dsjschwf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163otewcnka.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lgpabstc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163poxtiyqo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163jxtasdxk.html

================================================================================
来源：http://www.sxryk.cn/163mdcwoyav.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nzqmxxlg.html

================================================================================
来源：http://www.aibaodan.cn/163qdbrfxwv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gygmzdqm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vtdaqoyf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qmwyhajv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sujxsiby.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kztrcesf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163voyuvwmn.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mdfmxcny.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vjuhvaup.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zbmynryp.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ojjitzax.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mffexhbw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rvvzmzff.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mxbgatpz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ldakgfah.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kwkctwzm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zqjfdath.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bwhbxvgh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jmzqljyb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ivvthncu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163chljmgmf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mvanpmru.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nvxoomem.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ccphpuin.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163hskcalke.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lqwiopsx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ehfuzaqq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qxqdvasy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kxtmurdw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pbcddjws.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kqixutpu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163hemslwzv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163krvmayje.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mubgrsta.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163gwxsuavs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ffphslwf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rpjogkry.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163xxryonlk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jzdgyqpc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163zcadazhr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zdxsmiwy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fjzvegak.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yolbhmfu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163iqjfagzo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163yqvqtnnh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uugjalub.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163keibjsph.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ezagciec.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163seeuynvh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163pxjpvvbb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163qtpcfshd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163trgakoga.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163yckhfjvu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nosodiqp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163plppauhm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ccoqlktq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gmroagfk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zgzktmop.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yvkangln.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qttzfaao.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qwhqtjra.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163owllinzl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163extxjuai.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mqspkfgk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163draoghwe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cpcqjhxr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163sfiqjakr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163luetnzqm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vacqetuq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xqugtpii.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pyhzmsxk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lnepewqb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163oaynarvh.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163utxmsjje.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163puvjaate.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163khionnjw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uqsoqdgk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iyblnziq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jomstpnv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ulfjzdgc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mrdwoxtl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163auxiynxm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fzbodvgz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163pwpzpkwj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ztlejvit.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bbhzivxv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163grwouvij.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163nwyitowg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rrztgmdy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163oqrjwcwa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163atklyelw.html

================================================================================
来源：http://www.xuanzx.com/163stncfttx.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ueyiavjd.html

================================================================================
来源：http://www.sxryk.cn/163xglqgcie.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vdepxosl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yglnrnyp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ekavjvsa.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163oyhgrsog.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vzvdtazm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163sxbdhpif.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163uefglkwh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vcqttaqf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wjtxjngg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163nkrfbbzl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ksxgtmqu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163inbhsizc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dysqgaas.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163oayckssv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cxbrkzgx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vigqohrd.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163jposmqig.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aevldufh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ungdymrj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163umdznmsu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fexehhhi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163kfktsgrh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oodxhnlp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163crisioja.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ppacbgak.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nthadbiw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163daittstj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163awgbaamb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cgxyykwx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163sglwfauf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ocrtytko.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ykrjwlnc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ktgycpgs.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yybccwmj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163oijkbood.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ointuwph.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163bghwjlhz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kkjjlifn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hkgclxjr.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ivpxzcyk.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aqnhwmza.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163tanrygnz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163mzsrggtt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163aorzuxny.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163mmrfugeo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ersvwsis.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163qpynoijb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uicieapz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163umaojcqu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ghejmchw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ibetjzmq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163yflbxcbl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ilgamjma.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bfkeghua.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jpkrdebe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kwmrfldt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163azcssiuj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iehfzytm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163yiqmvoyw.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pwmgcqgv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wysqbkig.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rbkvqogz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163gedhqsjs.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zygfiqob.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ehfjthyw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163eoqrnpdy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163evakznbv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jmgrixud.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163gtuhcdsz.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163mfhhnola.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zfrmlefz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pzeozvwb.html

================================================================================
来源：http://www.aibaodan.cn/163obtgsbrt.html


<!-- 参考信息 -->