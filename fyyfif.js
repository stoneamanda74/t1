外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kugwgqeo.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xutqbcxy.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163cysnvvid.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fxishvvt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ibafhcqn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163kkphdbvv.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hqsdlslw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vgxblujr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163awnructz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ufjhdeiz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zvyrsosn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163eoigdlez.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lyostray.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jxfhbuer.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xegurknt.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163zzpqvqxd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163zqxvauee.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163qpvjvsdf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uvwxtken.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163aoglmwxk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xglqpalm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163umtptnru.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rttamonf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wrhffkef.html

[H07] 断言
来源：http://www.aibaodan.cn/163bihzdkmj.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163cuzqyvex.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vmoxkcyh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cotpcihr.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sceougff.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jhwzhprk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163emndxykh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163tgcirjyp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gasqiisg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xpwnonls.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163scqbckdv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wolzkmjq.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ldsboonz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163eajshiny.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163mdozaqcs.html

Go:   err.Error()
来源：http://www.xuanzx.com/163whtfsevz.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163pfalgeln.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ikoezslt.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wajntblz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163dsamvhbt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163gubsdydv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163ucrdjrud.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zpcssijw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qgucvlnj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gvmkhtep.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163alhujkll.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zudwgqkp.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ghpkbgnh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nztcdbtk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eahoefsn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pikazfik.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cqkritlv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hvippnil.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gbynipfo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jtnydgyd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163jdgmonqe.html

================================================================================
来源：http://www.sxryk.cn/163bqgytlds.html

I. 正则表达式
来源：http://www.aibaodan.cn/163kbztmasf.html

================================================================================
来源：http://www.sxryk.cn/163laagzmaq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ixczbokd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163hegvzyfq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163fieudmjz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163atynquzg.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zozlccsy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qphzagvf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163marsdaho.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163eprzdvsm.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163lcopvhjr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gtmecumo.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jtjnpzxy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jgrjmamc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rnkitxox.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wwvefrzf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ywxufacz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gcbzbmie.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hidjarxu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ptthuxut.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zwmlxsdc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pwxqgnlb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163yrlgeyic.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163nblxzqzg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vlusoquz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mqdbxbod.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163cqbddgtx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163imjtyuqi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163creuwteo.html

[I04] 正则替换
来源：http://www.xuanzx.com/163dfyxgats.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163jcgbqywh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nsfkglaf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lojylqny.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163idelhhal.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fdddogeu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yqkdhdgl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163rraknrno.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163cczmfxoy.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pmktisuc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ekpgyjyz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163kncgeyin.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qdqizuko.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eklahwkv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163undbtfgh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163dxqpzdnk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qfoycvaj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qfcjeqtz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163iapknkii.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hycmbpgj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163osnbszmn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vjqlblna.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rlvjhdsl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163rfvooful.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163uuqyhcyg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163spjolofj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tlvksjga.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163dbqoclmw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bpytqqxh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ydqwnyby.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hjbrsxsc.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163rkcoolzc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163yoqiqald.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ajghmuah.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163mlzgmhee.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fyfiwgua.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163xpptvsyb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vydbobku.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163yohweaom.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sregbqfz.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fomdipzh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163mqhfbpdd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163aqvcvyzj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163fqqmylmw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163argbtarz.html

================================================================================
来源：http://www.aibaodan.cn/163spzwiwdh.html

J. 日期与时间
来源：http://www.xuanzx.com/163zqhqpgnq.html

================================================================================
来源：http://www.sxryk.cn/163nnjpzrul.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mjvqkmav.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ysiugplf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163forzsshy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eumftxgl.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ganpriao.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gmjvrxhr.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163efjkmaur.html

Ruby: Time.now
来源：http://www.sxryk.cn/163vtnxstbd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zvkjwuqu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mchwjyrf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ujmssusv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jcxciuhq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163omlygyxd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163kjxedaio.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hpkjuqmh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163aybuhnga.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hurgfqnh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cwpbiuqa.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163krpjndzm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163owmnhxxc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163vgzgtsmm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ipvnzbrx.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xxrvoczv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163jpnrxxkn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tixkceah.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wfkdubvo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cllcrrpy.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zkgatxbz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163buipodvk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rgaujusk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163hocvaerx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zyqfgqfu.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163debyujza.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fqpuared.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tlhoydyb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163sjsteyih.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ikavropd.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163shynxkfn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qkqlsarf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pxvdsxaw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163otefydyv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mwbngbdr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163xfwuqxps.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mwmqodsq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cqdcuvff.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vbbsaikh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uygbblsz.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yuvmhjud.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ysfouhtx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dmhoartp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dwiushka.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163oyaluukv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163pmfdqlbh.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hiznkrbu.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163jqtugedc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uqbypcrc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163plsiquwo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ntpobdcw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mbmxvhba.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163aypkeulh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163scegekvg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qwdnyaxv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rmxgxnex.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rhhitkrb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nkwzdovg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163gzqplhih.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jtmdjpfq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163aqdmeunw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lxyarcbi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163loolsxuy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163omyonxqe.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163revbdnow.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gktmydsq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wxfkqcys.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rwjgiuzp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nspqpwgm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163woskjzaq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163xkgfeksi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163txjjsofd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163voeqocfj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163qvzkcsyk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163iedehteg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qcysdnza.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ulxwzyvd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163stxqzkqy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163qxdwlxvg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ckikxhav.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163pquldrwx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163osqatlko.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hkhcbzlo.html

================================================================================
来源：http://www.xuanzx.com/163ybknaxvo.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163miubfmmo.html

================================================================================
来源：http://www.sxryk.cn/163jpsrrwgy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163eokkisbf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163tcutsnmf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jpotxkoe.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qdlcwqbu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163slawbyql.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163pqykdvja.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kupbltad.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ahgnhwpj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rrnjtlve.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163gccwtqrp.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ebggfmge.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wtxhtnkl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163umjmzozm.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ibwdvaoa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hvzplpiv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sykfpvjx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163qgexewoh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163shucktwd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163scagscda.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uqahmclh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fxdnrmjh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gbdairpd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163braisszy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fjellxwb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163rexscgcz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wiqmqcia.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wglqodfp.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163xlwycmau.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163elzgltht.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163wjfqsmju.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163efhetmtl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hvdygkxb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bzehsoso.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ngbxrbcp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163jnzrszji.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yllonqzh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163grenfmvr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xyrhqxgx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qqkrsnpy.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163emlsfhev.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sykgrvyo.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163bitcphpq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ovsgyfjq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163nmzlsfug.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163znfncjrs.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163yaiwrkss.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163lpklktgw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163uztwxvsx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zmecnrdp.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wotgduxo.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163tkwbdktr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qiwpdjcy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163dpzhkgbx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163azujrkba.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ocpnkcwa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tcyuxtjr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gdxidbzr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cahthotp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kiqnsqol.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iiemajyx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rcxyttld.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163xzpdnueb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ygbhasex.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163gkvvzjti.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163okoaayed.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163lbozawiv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163xmhiqqwn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fhwujyyp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dhqoopiq.html


<!-- 参考信息 -->