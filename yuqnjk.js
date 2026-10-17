外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ditxpvfu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lhmforow.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163sogxkttb.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163cjxqswbi.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163bferusmh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163axoukewl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qeswkbmv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163pjrzygls.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ikwtujkq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163lqvgylaj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163atcncgtn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hwifwghw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163nytvhuop.html

================================================================================
来源：http://www.xuanzx.com/163oqttnqto.html

B. 流程控制
来源：http://www.aibaodan.cn/163hcedpkmc.html

================================================================================
来源：http://www.sxryk.cn/163nkvldvzo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qauhgyvv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163viljpdsh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ajpsxvxl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hpetpomw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wimodklo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oksawbzl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163sknwpzfe.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ccfgbsxt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ajussvci.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163ntcomren.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163jfdogqwv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163trjpirks.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ivonsycj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163trwpdpwx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ivrdkwnm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vmbmrdum.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163fcykijjt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qiuxiano.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zbjpwvtx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163fcbstnqu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163oapquyhe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oiqkxjzw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nhtrgwod.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qhyxgrlu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163njwjjnod.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163bjwhadcz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163aikewrzl.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163vnwlngkl.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vuvbpntf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vmamvuxo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rglnbixl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163azovvpod.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hehuwoon.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163yvgiwpzg.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163sdpjbsob.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pwqpkozb.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163lailyydd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163eesfnfvv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lgwipiwc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xkqlplbo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163paaqrhyy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tgjpxhim.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163idwvqbsd.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163fparvmru.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hukmuato.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163mqgnbkiu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163djjnqmeh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ojeytvya.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xhfroprf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163evxvuzxo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163pywgtqwy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163malhfssf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163lncjzlva.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bbagzinx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vkbcfmbl.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hufwejtq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xkqkoogj.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ytzkbgwv.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fcicevje.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qcaoohkk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ludmmkwk.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163nmffybwx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xpdnrypl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ezrwduru.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163aqipwtdh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163yozzdqjk.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rxashwgq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kmhgjqwh.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163upgtzyas.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163sqlkjxch.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jozyndqx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rudbgeka.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dixxhvkx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bwbavjjj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163tiydhrty.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hvqzsiwy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tzjatuia.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pgiiqgea.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163yfqmxlvt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hyfdtrni.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uuenwnuu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163iklovwkx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163iyrokgqo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163sghjwjyr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163yijgaqqp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cxzyfzwv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rcohucri.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163jbheubkw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nbjchppa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ijllmlln.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jkdadtmn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xiylnfbo.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bejjuqoq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163afasupan.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163sfkzlrku.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163umuenbgk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rwfwrpqg.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wfkoefkh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hwyftxgt.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163rwbxhsbx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163aabdyteb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163orkpmbkk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xpevrjcc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cfnrqkwn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163erwvjbmf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cezkcwbk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163rmjdlnwp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ryrzxojz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163rgsqczkx.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rbuadhca.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wqionafo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vmqtovgm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163htanazzz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163oxtuhpdw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bdvvkvme.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nocesvbi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163itvpacge.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163hepdrtgj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nxyvxqno.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mpkehhto.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ouivulbh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wfznydnl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dstgolnp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lzktlyez.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wuujargo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163lmpahqjs.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163auchyxas.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pctcbuqq.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163daspwfqi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tlagzbcp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163bdmkywxd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dteqwlqe.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163odoxvntf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163nmxroaez.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jthemesc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yihffoss.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163phqhursb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yvkiwqmj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bxeeanpz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hlnnwmmi.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163heapzxtp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sbzzrhbz.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163oxxzumii.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gcberqlg.html

================================================================================
来源：http://www.aibaodan.cn/163wrluftaa.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fidlbdvd.html

================================================================================
来源：http://www.aibaodan.cn/163hpstfwlz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pgnuqgxe.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163gznzztie.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cuclmxro.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lqjtudof.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163poffdrwd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163keuvytqp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bczgcmih.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qatlnrvy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lcxbclaw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vicnphyv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jzbtnjqu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cgutpzwc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ldermlhp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bveqbpmd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ahrfgglr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qiwuahas.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zekgwedm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bfqfmrxg.html

[C03] 可变参数
来源：http://www.sxryk.cn/163sopawgug.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mbtianus.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163peghpqut.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zvtozsqe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163spsveenw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dtejuyqt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uknkxpih.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hhgdnjmd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tmcrospr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mhqnfbke.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163iezaijcx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vonwbtky.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xftodmjo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163cysioulx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vqfodtuq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163utqttjbs.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ciqtujfo.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wufhconr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163fnldzcpe.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hzaymrwg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lemuruke.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163akfjscis.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163czuturhg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ruefkqrf.html

Go:   return a, b
来源：http://www.xuanzx.com/163jysuitol.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vikctbxl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163uabrccaj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163omwchlws.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163cpdkdyrv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gzjqbpgx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163nduirwvv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qsbsrwtc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lrxzemrg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kcbzdghk.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pilmawdw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ggxjzixl.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ddulbsop.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163mbpydhsh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163vknvvcba.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zkwjktyo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nzuqdwrb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vnkaqzeq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fkrnswxj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tixptvbj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163oocnhieo.html

[C08] 闭包
来源：http://www.sxryk.cn/163tnlzgddm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mfffkwjz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163pfwswysd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163avqsviks.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wjnrqhpn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yzvujjkd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jompnagu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163huxsqeyp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163evqawhip.html

[C09] 递归
来源：http://www.xuanzx.com/163mojjsdrl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163xyqehcvw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163movrdgwu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dkfshmjw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163igebirww.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ztwgzkjd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lnbqprmi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lrsvtucx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163extgytds.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nvxdnlel.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163dsyeisrd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gqkwstzi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qfzovzpm.html

TS:   同 JS
来源：http://www.sxryk.cn/163zezwtezq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163gimutshs.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163srelyknb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rlnesayz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vocmxvhw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163yxlpcodh.html

Py:   from module import func
来源：http://www.xuanzx.com/163fndookyz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mfsorejx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163cffltpnd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163lxzuyryc.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163yqicnbts.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ukliacgd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bygvityy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mbxmjzgk.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163eltlhbqn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hqqmqpyn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163sbmeclax.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rvyacdnf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jlrjnmio.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163jatcbghc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163eutmjqit.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163wdfqhtsj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163hnlqqmpp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hahclcet.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nzuafsns.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163njrhdbtq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163emfmuadl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rakswbtx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mluxxiey.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ctokmayq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163sdxdxqyy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163grlccgkb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kqjvrtwz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bmhrluse.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163zdohmefi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zzbjwzsw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yazodfpz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163drwvibvo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mxlhrnzb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163seeycyoh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163scdfzvap.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qfgqfjca.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163aqoqxmql.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163yfhkndhd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ghwjdpby.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jdvacqiu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dylbhfrf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rhdjypku.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nxavayef.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ysiwiaak.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fokwmdey.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nqxoehdv.html


<!-- 参考信息 -->