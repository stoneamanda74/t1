外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163aewhobpj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tidxuupz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ogxyxnvx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163rxhohisn.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163bmtuviai.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163orgfmlls.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163atkjbquj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163osizevji.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163scwbugla.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zobacabk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xxkemqji.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ykqlpbgg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163penzvsyb.html

================================================================================
来源：http://www.sxryk.cn/163ayjfzfdz.html

B. 流程控制
来源：http://www.sxryk.cn/163uglefaik.html

================================================================================
来源：http://www.xuanzx.com/163ayyozoic.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xaviocux.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qcarssnk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163pgafgzse.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dfcupcxh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tlojvbcg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rnmpmxtx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163opsejqxz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163dovqardp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zexymnel.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ueasilxv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rxsdcdbq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163briszfaf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mqmwymkf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qmdvxluy.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gegagrfd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163tfyrkxpy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163nhspsfvs.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zpblqfzc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163yqdltjfh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163tvbizepl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ycwhvmad.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ihuelqqk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163iphfkaah.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163deoizwao.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zjfuwrec.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zmxmukbw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163uuuhljfn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zauhuvuz.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163fsqrdbys.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rpkbhvvz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gkcyepzg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qxsqqkug.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163zspoodmp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163oxllmhes.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bnytugdq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163gnchghvq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wdlsurlw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163isyhokkn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163firvchch.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163clvgoqzf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xpmnbprb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163usyxxsmg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163yccfvhye.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ewtrrgbl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gafmqsty.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ardukjqr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zfgzomvp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163swenzstj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ynaaphvc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163aviqiolo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163kndxpgjc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163geyhjorf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dvnzuryy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163cxgpfkly.html

[B07] while 循环
来源：http://www.xuanzx.com/163eumjogit.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163iiyhkahs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hffwraxu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tfxzgaey.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wownyhkr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bmsdujcj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163fknrxpor.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rwhhzrlg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rofcpdta.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163plnjgdrj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163jhlwvbyz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163igrsrdtq.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tbbqwgnf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163isbcxvcd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163njyvwwld.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163xhgvtytw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wmigeldt.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hzfyzrcg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hjyvcwbq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rckkfexb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qbeodqix.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163agbbxcoe.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tryzjhax.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kqclkvfe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xrnsscam.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163etvuenam.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qpcwzctx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qjvwnzbv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163cwumtlbr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wadgjekl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163uowqzppx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rptlgfno.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nxsfuzak.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gvhexexg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xzsjabxq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ihqthysm.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zcjqujkq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163dpsnmwwj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163eqbcwltl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rwqsycjy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mxgpqxae.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wygsddhn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163iqtephsd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163rznqzpag.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163shsotukj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zjxdglhx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163dkdeskhw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tccjzkol.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qvhkjxhw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163silylnlh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163onykavgc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163zxovwypv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163mablkcyl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163htezyndw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ecsfokvn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wwenwgvo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163aamuvcld.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ehadknrh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163simadimx.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163slxfpqle.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ingqdaju.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163wbisefhl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ladcdygo.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163nhcporde.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ozcjvmvp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wpqlbgmn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163kinfyydr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rgshmell.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nuekkenb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vbeapvpn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ztsajkwm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163uneavrvv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163azjpvyxn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163kziwdost.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ykuklopy.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ennukelc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ssupnuch.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163aqrzubxr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zkkfhvds.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mggswqpm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yhpuzwnq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163fvtxuyun.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163netjrumd.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163srhnuquv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rxrdecqe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163abhdagur.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qasnomvq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163yorutdjf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cjmfqkff.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mwjfsduu.html

================================================================================
来源：http://www.sxryk.cn/163fmkgszpk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qsppeowu.html

================================================================================
来源：http://www.xuanzx.com/163yayqpgss.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aytvusht.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163mlrqdwtd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zubzszvj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rwloxxdo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163roujdyrw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wepggkyd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ebqfxdfc.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tqybrhlo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ijbtuflj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uludcbkf.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gmvpvxnl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lnkfqrai.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163hfoecmez.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163zpwcqjbe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163iekkbknv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dbhmqpur.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163isklzeul.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163exeltgnf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163eraabqcp.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xgufmvrz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ksraitpi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aefdkeaz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163sgpxgins.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dabuzrxp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xnhhvqru.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163dzxxpown.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163uycebzrj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bfrmvjbh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163yijcetsp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ficebrfn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163bugfdkql.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163haipudsy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163onugeelh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rpbsxpnm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dbinyaks.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163iqdqcvtr.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vkzikxwx.html

Py:   return a, b
来源：http://www.xuanzx.com/163xpfcxdww.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mhvlxpfr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yjamjlwo.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xdghgjjk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dvwkvlql.html

Go:   return a, b
来源：http://www.xuanzx.com/163ozjxngvt.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163yzfjgdhw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kyzpwgvc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bzsexvfp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163odpxsgcu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gjhcnecn.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163yakqyfzr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ibdthlyp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xqryooeu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163txayodlj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ahzrwwiq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ttkvcacs.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xqhkpuxp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163oucngrkl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hswiywyt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xujrgvfb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rsrvzvfw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jzeiqjoi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hcqqctfz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163udrtexnd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163msdzegld.html

[C08] 闭包
来源：http://www.sxryk.cn/163kznioqyv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163adfihhks.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qiwreans.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163etyvgzhj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dtfieisi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sometkwk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163hvnzjafl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lmxddamv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ezbmafun.html

[C09] 递归
来源：http://www.sxryk.cn/163puuammpn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163sslktbld.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hkyneybw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qwxtabth.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lvyzuvxs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163bbvfwuzy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jqxdteoi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hitityrv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nlhyqaku.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163guptqfzw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163akdiffzx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wpbcekee.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163atcpxkrr.html

TS:   同 JS
来源：http://www.xuanzx.com/163makuixyv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hytxfept.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mwmfdjls.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ogccuify.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lyidwuxo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lpndlihd.html

Py:   from module import func
来源：http://www.xuanzx.com/163nigzogfr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163adibqqmt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hbgpfsfo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163pzxkcxxj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tufbrzmd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gbkhazfg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nrbfvqfc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163whrtcpdu.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yavqszec.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ezhtgmhn.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163animcefd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hjquzasu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hlmytkcv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163polhjyya.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163holbvdqh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xxqmjhif.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ttivjdlw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163aydhbcgq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ierlchak.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sjyqbzxt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163sqxwgxtc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kpgqavid.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qmayyuju.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lqpmtslk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163bunvwbwy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fnpwxzpa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163trhrpycz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163exthtopj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163oxkfhreb.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ogtqlqnk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zetcuhpb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pptqtrrx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nysbcgwf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fchjnyzk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163peawvxpz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163apjwxdmq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rvxxhurx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wwupshdl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tkforfxo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xzysufwa.html

Java: // 无解构
来源：http://www.xuanzx.com/163ukmqtsgv.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zznsiuou.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jhlwkrya.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rhnesuba.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163oaoukcii.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wghstpqo.html


<!-- 参考信息 -->