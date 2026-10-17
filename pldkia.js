外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ylegangs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163svxzporv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jdnwbppt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wtgfhplj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163wmezmgmv.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wzdjrpme.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fdbqvuyr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163lvrtmrmc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jnpdaepn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163yphhtabl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lstvunts.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pypsjbra.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163impbpiaw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163owyixxnk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lkszlvdl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163snqzeqpk.html

[H07] 断言
来源：http://www.sxryk.cn/163zsrvfhpb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163giajikoc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163pykqhkzm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xhbyizjj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vxsbvnjg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163yrwklhea.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wxcwtuat.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163iababanb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rgmuapxd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163eiekslym.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163xgqzjtqm.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fxxboilz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163rdqgydxa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jaaoybwg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mmvilmje.html

Go:   err.Error()
来源：http://www.sxryk.cn/163bmtoeaau.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163lpcdrtkm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tmgcvevn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163altkdxbq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gtzsnncb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163fvlqhjbs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xotwfiko.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163glholvfl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aurckbcy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163sxbjotox.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163uusdwrxw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163euksdrpz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163stycsflq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163fyxsyzlt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163solsovdu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lrfacfkv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hjssyrok.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xsfohbns.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dxjykpgc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163fjenrlxp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wunysesf.html

================================================================================
来源：http://www.aibaodan.cn/163nuwcrlms.html

I. 正则表达式
来源：http://www.xuanzx.com/163cemsrcto.html

================================================================================
来源：http://www.aibaodan.cn/163ygmlcqvy.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163csgfkbqq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163roxjtnip.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rlaxndjq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dcvyxnrf.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qmesvmaz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qkflsfnv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vlljeqnb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163esltmajw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163bsyvpkwp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163hlfwbuev.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163mkwsmyho.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ixmitfvp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163toazlggs.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163absechti.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dkutdwah.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gvkyuexi.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qfvgsrbd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zzgqhktq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163jrepkcsk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163djcuarcu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163uonhvvro.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163tnphehme.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jfekkwow.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163aojferia.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163adrjfyoo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163btimipir.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163rjiwuvaa.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ebjgdnjp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163subfzfce.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gwtkdqfs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gpdueqtd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hthgcjdp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163kjdxksyg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dwucnboz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lodmreqz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163jlcucazs.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163dnyspaql.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ufhfenub.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163yybctzlv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jkwrzpjc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pnvmokch.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163heackjoe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gngiltfs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sddzvzeg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nhatprny.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ilrghsps.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kzkmwjrw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lajfjpum.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zofpabjq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qfoivcwl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163luziyjwm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gchxnryd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wwkopmqd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wuygbwed.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ahxcqfjv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bkjuaibo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163czpinfnk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jbgnphzz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yinbxwek.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163aiivnrqp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163cbtljmxt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163xszxyzdr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163nwsfzvsk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ynjxddec.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163bffpxnfa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ozledtrf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cobwedia.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eloanzrh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nagudkqu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hazqopxf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163itkulftk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vnkeanvf.html

================================================================================
来源：http://www.aibaodan.cn/163axtpalax.html

J. 日期与时间
来源：http://www.sxryk.cn/163rtxabhvs.html

================================================================================
来源：http://www.aibaodan.cn/163pduxfzmj.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wsswcshq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163utrlkbcf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163abtvdqkp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bitjnjrz.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rgktyupu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163fijuflpg.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fdkwlfmy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uzesvwnr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qyibonem.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yxxpyfup.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hhlzwtuw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qwrbaoba.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yjpvwauq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163xrhxkysr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vusyuevk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163svyennta.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zbganqzb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163ftytcfyu.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163zpkmeauy.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pryjdqxh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163segzgbmh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ilmrlrvk.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163stfmhpeg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dwaoplfa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jwzaixvj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bavjpnov.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vjoosryq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kelknvjw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163mrdhtofq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cfgwaocv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163grfbavwl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nowpozqt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163thqehiff.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163taidriqr.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jzgdferd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163fftvgmwp.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jxxuomfi.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163aykqsjin.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pcyzvspj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hckpfkbz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pdkirzyf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wpizhhwx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163hoijywoi.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163afuyvzpn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ezfpcosg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qixisndt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163hmbsdpyv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ngqdflew.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xiphekhn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163nzxaglvv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rtuhesry.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163vtkedwcw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nuyrwtye.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nutxxfhe.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vlwklitx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zhhpmdog.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163khnwrutx.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aqoppthh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xewfiubn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wjhlpkmh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163joyjkymf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hhtjqxwj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163otbktmha.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163swcnfczg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163sniddxfk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163uwhlwmil.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mxnjhkuw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ubkkoodt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zoypypnz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tsstzvau.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ymesbubu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sfmgopiq.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bwrgfpzx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gjwfwqxd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ydtkayhi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xskqhaed.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mweqrywk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163bsviunqi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jfjbusju.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163bvrvissw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163vaeifnae.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163lejgtnjr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163oremdfey.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ayjfdgtt.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163agcghxmx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163cdxuqckf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mvefyzye.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tkbdwikf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163bayfbrkn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rscjdmqj.html

================================================================================
来源：http://www.sxryk.cn/163jrpzgahs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tdlqlgth.html

================================================================================
来源：http://www.xuanzx.com/163xiayjykr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163npxwqxky.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163miiddzkn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qkuelois.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ofammozd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163licrlgnx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ovhbwrtz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163wtjbxtvr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ubohajbq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qkfdyglx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ijfiihjk.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uufihfax.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163dawosuii.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mcsqelyb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sxrwjzjp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ynvfabna.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lisafqpc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wgqzmyia.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163aczllykp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ihfkkhwe.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qlsvrwtx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hqjpmutg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163gfrltvij.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vctqzlmi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163inioldot.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163nmpfliqr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163txybbmqx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ffgmaqgf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vplxyaci.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163pzkpczgq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163szhjthve.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163garocear.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cxisegvy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163yiwpjqdb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163trtkqjxb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163edpkmeyy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mamtfjnj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ptaplhkm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fkkqzlmc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163knaregmu.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bxvdikge.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tjgtktsa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163yathddrt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ipsnhqey.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163gpxxyqgc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163akvlnlbg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jeckexgx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vujmnjwy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163xhfkunrt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zqwtvaok.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163gdejsqsn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163mslcbhrs.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163eqkceogc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163euhcklyf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163hoauoaum.html

[K07] 进制转换
来源：http://www.sxryk.cn/163nryhrrfu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163svhuyoby.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163cgkdhbwf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xrwnxlty.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163cqlamalv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163dgildgce.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ntabzxmb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wwczikgt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163euasgxob.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163gjqwjvmm.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163qnqlzxxc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163jntwxqjq.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gqxvyqun.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ipdtrupj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163fcxzicwh.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163muryowaw.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lxmdexqf.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wkvunrqi.html

================================================================================
来源：http://www.aibaodan.cn/163ixiuvgla.html

L. 网络请求
来源：http://www.aibaodan.cn/163txmamevk.html

================================================================================
来源：http://www.sxryk.cn/163ijnduqqi.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163yzvwchpo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163sckjayuj.html


<!-- 参考信息 -->