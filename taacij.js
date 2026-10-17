外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wwellzid.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vrlcuoxi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dpurqybm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163fffeypkt.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ffdzizmx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163oranfdsh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163dhixzzyj.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ucgolcxx.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ekfpsjdg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ryjirbzi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163scefnrsv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163efsgdmkv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163mrtaxbno.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wnbdrxzr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ahewnvoj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163zjfqslje.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163sqihrrrh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163mnqaawrv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163kpeeitgm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163hflskbzw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163hvqgznxw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ndoaariv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163djfwgbto.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163tziofajg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163akvrxkle.html

================================================================================
来源：http://www.sxryk.cn/163otyznzlo.html

B. 流程控制
来源：http://www.xuanzx.com/163bzvvjzdy.html

================================================================================
来源：http://www.aibaodan.cn/163npkindjv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qktyoobc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163lrxwdptn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ktrbqufv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cukcltlv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mhmyvbyv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rwbmnmfh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163uwjpcxrv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rvzasjwg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163erirwlcm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163awrcacrb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163hkidppum.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163jzgxogth.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bredcwij.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lxtosivt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cwsptahd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xiljopct.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163pynhleva.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eefipivm.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fdgwtpwv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163orlazlpv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163qzdwpevi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tmctmufi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bdnrbkmq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163zatfqpzi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163thfjtedf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163uivbrska.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163bfxdwrsv.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163yvvssxbg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tcgpsddi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tgtqctdo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fpauxlit.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hwusvcsg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163fbcmmqma.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163juvuvthq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163cdhnnvrn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ryyubzzj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mlqrphin.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hrzmpyiv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mtnbyaph.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163adpwunzd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kjdmpowq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nunnigba.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163kwzikave.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163csqmoqgw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ngrgxxxh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wszwbpac.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163umkrlzme.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163yobwnscr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wwikbhmk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qbgydqzu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xvgsfrow.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163acniezim.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163heonpmpd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gwbcdpog.html

[B07] while 循环
来源：http://www.sxryk.cn/163ghpqdcsb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vivcmlpk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zdnbkzgy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jgqggqcu.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pkhpwguf.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ixcpmbdk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jvilmeob.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hotnqfem.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ptuhymft.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ekakoqla.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163axcsmbrf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lvargnco.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gpbcolab.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vkkajlxk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bomtniaz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163muhmbbwq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tkynvnbw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qifuytul.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163pqnggpjn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jytljpex.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bfzcjyrr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zunimwxi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qfrahuzp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163byelbztu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ykzzzrfi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163hrnusnvf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ttrnepmq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163cioadgbb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tuqtkedq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163drzuxqmz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163iioeundg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lunjrewe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wcsndwin.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bbhbagif.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pybncqek.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ynuebttj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ywrmcluq.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gdoxguzc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163yoojxmvh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wqgganbw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mbutcmtx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ecikhynr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ggkwivsr.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163egvwvdwe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163aihdywir.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mrstoxsa.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ialuombt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163idbnngkv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fandimqp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tskixiaj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163catmeaql.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nlukulmb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163erxdtidv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gzuvayzt.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gozmqrjy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163wzdayplw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163xtxljzuy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xvswfnvn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ehaixhge.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163znftcuad.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hthshrvp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zuziyfor.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mwtzuaaj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163okzzywoh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yucadhdm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hykzfkpo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163avvajeea.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qmzzajuj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nijrbnzx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vwwvgzwa.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163aqnpgagt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vxquomth.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yeixzbrv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163izlanbkk.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ugbpnavr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163njbgesly.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163qlbjqbma.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ddndusjo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jzllrdmb.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zdybcnmv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wbtedtlm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qigjmmkt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gaftuejd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zmkpbpcb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hjipkavq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wvbrnbwe.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uuovluma.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kxcpemgf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nbafgcuy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zsgezdqw.html

================================================================================
来源：http://www.xuanzx.com/163yvihcqtl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nkbrwizv.html

================================================================================
来源：http://www.xuanzx.com/163jzmvgpbd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qzfomoxk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lpgqmuhx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yfrenspb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rdwmcnca.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yzshvgzw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xqmdchqd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ahiufrye.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eudtlmbk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qgvqfdes.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rffpyjqq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163dvffvpqi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ymnnrehk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lmycaxpv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cglootyi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163prenwwad.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zhnzkmbe.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dnzeguuy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163vmonbzrl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fsgzmbjj.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163tdilvucv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163muhwgddd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163grcrqxtc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sagckykr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cthwnrxg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vylfqbma.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ctunortr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xmvpfpfb.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dzwndwqn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mgctfaju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163acmcbrun.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163nrerkvld.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rmuncmlr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uajbhgzl.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hfhqklih.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ekgvjxuf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ebgnxpnd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nxhgugnb.html

Py:   return a, b
来源：http://www.xuanzx.com/163dtyzfqoz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zzcantgz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163lwmavqsh.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163yizyqqwi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163oaoaraux.html

Go:   return a, b
来源：http://www.xuanzx.com/163utxkjywv.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tkkscgmu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163knbultrn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ijohbuoo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uadlwmjb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qvjqyocf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163funmobtj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zphcxsmt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gtibaxla.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163hmzfmugv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cwepyjhp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163emkdtllt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qlmxzymt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163mjelajaj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ilyzjzel.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wfekgncj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pqumclsk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fpfirsaf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mtodicec.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163apedyzgu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163mwitdxia.html

[C08] 闭包
来源：http://www.sxryk.cn/163uesbkkvt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pyrrwsas.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163acfdgmdi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wswuoumd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163daapfwuq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xqjwpfwb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fsqchpeo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tlfrytnr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ayrxylul.html

[C09] 递归
来源：http://www.aibaodan.cn/163jjahhyzl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gzemznoz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tdevkfcc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nrnzicrg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zjwfivqw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163oenteymq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ntwoiktq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163aqostefk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163eqbrwfmd.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163graqbaxt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fbczrxpc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163bbcxvpik.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163bmxpclqr.html

TS:   同 JS
来源：http://www.sxryk.cn/163qeycylst.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163yxezxzck.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fxteduov.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163arkisqxs.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nzecndlk.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gonwpguk.html

Py:   from module import func
来源：http://www.aibaodan.cn/163perurgdq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163twbkcjoi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zowzihlz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163khkgmiua.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zkqmwwzt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163eawfhwvr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hequgbty.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163aojmekvf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nszklcly.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163giuhvyrt.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fdcclcfv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hkjwangv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163otjxmrpi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nrxmdphv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dguvfsll.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163udoeapzy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ccolecqw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dsqeijdb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163cdehrpyy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uwksyyer.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nmwdknfl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lvhywxrx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dkvldblh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163alzuuzrg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jokxlero.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lqabdjrs.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163pejvnlva.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163opnwznrr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163owoabvfj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163faaokzqd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163syhbaldl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ikcltuxk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163dyjrpuxz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ukjjgygp.html


<!-- 参考信息 -->