外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163jjtvlxbw.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163dtkqbypo.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163sclnbfry.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163pvpozotp.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wnetdbwp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bwoeefxx.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yhwhhwug.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gcnxqway.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yaodcwew.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163usduzwts.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xulskmvx.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163dizsytzl.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163hzeyfmvp.html

Py:   len(s)
来源：http://www.aibaodan.cn/163tfltmlat.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163axqmpxni.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163jvjrlobt.html

TS:   s.length
来源：http://www.aibaodan.cn/163fgisvxsb.html

Java: s.length()
来源：http://www.sxryk.cn/163sbfxxrkg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163otowjtfy.html

Ruby: s.length
来源：http://www.sxryk.cn/163kqsgimlo.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fpqwiehb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163qgetbteo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wqeyqztd.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163jxpnprxi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cpwfhfmv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ttnwyiqd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dpwwlniw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163liuorqro.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163fbdqhbdv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163rfztidsp.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163mjiwewsi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163xeogfppx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163kroehbse.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qvwakezu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xajiwimp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163zoeoaxxr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163tmjruupa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163jnjhdjdg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163sxwbzfxf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wdbpvwfr.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163uegwfvwk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163rnbivmdj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vfgwjcjm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cgjhcahw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163szqkvrmx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163enwtrhyh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163judtbgai.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163kfwratyi.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163wwzzyied.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wwnlgbcb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qsfcweav.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163luwglaxr.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ofezgtpj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ymebeywk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163mytfvepf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163dvbtuuuj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163bmscfjqv.html

================================================================================
来源：http://www.aibaodan.cn/163ewgiihkr.html

B. 流程控制
来源：http://www.aibaodan.cn/163ylcliwbp.html

================================================================================
来源：http://www.xuanzx.com/163nedxythy.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zxavlaks.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jmmhinge.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rlzkwtci.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vfabtpze.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163acvusrwn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163daekxagi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wewvggnu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163hewqzyqj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163moobvanf.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163mflnbmid.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163fuvnaxfp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qxdvnnzx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163emlfufqy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bycygvzh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aszpzoim.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ofrssdvu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mawhiqau.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163sxtszynf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qtlarmfj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163pxggmkxa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163zexsjgqf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sqmrvlfk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163vtshcsts.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xkzwubnr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163iosglrph.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hltkgiqb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163yizwugob.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163hvrvjzzi.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163spbiifyx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163sdmfhzrn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zttbvtfh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hayqaabs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163fzfsiqsj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hazjdgmb.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wahakfci.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cupvhohk.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kecsowcv.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163xpeawerk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163orjdaejh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wvtzqfgq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163blyfokia.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xxopdcnp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gsypfkom.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jmgsmblk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hdnolyhi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vkrjhwfv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vkyjazwv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ukbklpsc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163giwzamft.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oqhfyamc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nzosrzze.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cgyxlkqg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163evxdramv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ezlhzqyv.html

[B07] while 循环
来源：http://www.aibaodan.cn/163pbkbkiql.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163cgxuxyyr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163uziswaav.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wspjmvwz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rhqujezf.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ztykodwz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163afusijro.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qeypwqwi.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ixssgcri.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163vedjhzdg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163clfbdttb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vizojfdo.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kzgopmzc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pffgnkkd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hxxpqdzw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163spqbkzcv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163cphbqsjr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163trlnjkxt.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163krpnothw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163bhcembyo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163pdnqezub.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kvscefvb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kgzxtmpx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163usmuadwd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ggukxkyq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163kkrhymay.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163onuwowzn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pjdzvcpt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vclyhftw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163mgatufxl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lvplkymo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wtytxymw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163olvphjpn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163yzphpimh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jqnjdimx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163uobnngju.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ewxmyszy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163fdhvwebs.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lfwnwyoj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cyovysts.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163opqdrswu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jwyaebxm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163yxdaitsi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fqsxjlsc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ysygttby.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163dfveozyg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rotdgign.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jbwyktbr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ocxypcab.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tpoomweb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zskghmpq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bzsetliv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ewlubmwq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163izsvgbwd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163jqrlfvpo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vtxormwd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163cikvipqp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xiaznafu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oraajbbo.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163eihoplyi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wnlkjzxq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qwjuxbyj.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wheurpjl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wmrqywna.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163pbjoiwpx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kqmemcek.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kaguqgco.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yetztrce.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rbqatghg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163aawtuxtw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lnjnqozc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ldttsrde.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163mqpmnjzb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dwwijlbc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dowdevzx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xbdmktqi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163khjayqmz.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yzsfhezz.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163daizzhrn.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ziczufge.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163dhnifpnp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jhguyvsk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163cebigjnq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163siwugnms.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bevdboex.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163bqezzupz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163wexmpfqq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wsprmrzw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ojbrqihg.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vefthmwn.html

================================================================================
来源：http://www.sxryk.cn/163qfygmkdt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ugbvdrqj.html

================================================================================
来源：http://www.sxryk.cn/163cpkliwez.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ixffuysp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bvjfijge.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163honljqzh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vlxqgzmt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mdiqxsgu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pbeozita.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163epyqhouf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163lyqicwlt.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lkvkarbf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163vukxwose.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wofmdwkx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mwotwacq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163crlzyzze.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163aiwvjdqm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163mzgeycrq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yrstryvf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eiunbtnx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ansnwmsl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fcyfvsyh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jxgmjqks.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vxvxyfzw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aatntnjp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163phadegnj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cjqswmfx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mqcseevi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kcjibumd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163innezrig.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fsttutgd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wrgypdwm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tflpvjne.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163sydiyxwz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jvlkuizo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jaubvyih.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163iybtdmld.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tghmfdrm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iemtpves.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163fasobtvl.html

Py:   return a, b
来源：http://www.sxryk.cn/163ivcsbegl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jhjoywrd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nlkhjcec.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wznkclbe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163smiejgdz.html

Go:   return a, b
来源：http://www.sxryk.cn/163vjiefdsw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gaenapmb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163usmjoyvv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hdzosohu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hsdeouuj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163voguppso.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wtxzpyho.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163eagzmtja.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163thjmjnoy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bfkxtfli.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hpmabfxa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163urajpjun.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163kjuygoci.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163swrouiet.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bqvwmbbp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163komsstqm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ibpasstb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dkbfqoei.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ejuaogsl.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kliyirrq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jdnrwlyc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163lvvtpdql.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163tuppqtqv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163amyaojkb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163krjuyqvn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zrnzebdg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163elrsuivh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163evrsbeya.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163eeegwhsg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vzxzrlmb.html

[C09] 递归
来源：http://www.sxryk.cn/163bnxkbytp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ouwnlwwv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163izmzmnjb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hnqyaasn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163aqpiatua.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rhiwqcjq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lchejxqt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pfhbkpxz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zhsktfmf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163hipmjncv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zchknaao.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163kllgfldq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ijidgypc.html

TS:   同 JS
来源：http://www.xuanzx.com/163rwvuptdj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wxnleuip.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163oxxzaqou.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cbscgtoc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ielorfwf.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163quodqgof.html

Py:   from module import func
来源：http://www.xuanzx.com/163htrkawbx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dfuaorfv.html


<!-- 参考信息 -->