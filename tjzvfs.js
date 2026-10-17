外链999!wailian999！

[A26] 类型转换总览
来源：http://www.sxryk.cn/163aowraxex.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gqpbloqk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163zzycbfxn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dmghklbl.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163cqvkffsm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mlasgtil.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163jonjilrr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163pfzbqdbc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xwonaiar.html

================================================================================
来源：http://www.aibaodan.cn/163dnozyrky.html

B. 流程控制
来源：http://www.aibaodan.cn/163sxzgwzhj.html

================================================================================
来源：http://www.sxryk.cn/163zeivnnsi.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163cjlozkgj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yvkympga.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163bflyngaw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tnjfkehw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163scumcxnk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dwtselgs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bsirkisd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163uwgnezci.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163krdwrfmf.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xmndoukr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kfzcxkdd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163igbpueik.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163agbbytrs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fefstwqf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vwjbmdax.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mrntlcee.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ljmmpbdx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kakedlxp.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cmjnbhck.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163hmybaura.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jtpxhurz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163adbvdrdt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nqlqqmqy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163oermcotv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163hvllvaex.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163eoehbqjl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163haajuhgm.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163airhmdbm.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163eqvahvyp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163subgycad.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163scphekwm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163koymhryu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zrktwatb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wjroveay.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163reacvtcd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163lxygrvpg.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jtsunzmt.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fccxvdvz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lhjbqgwz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163yhttqloi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163runimuih.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163svpqxxip.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163dpiupbww.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rvztzxyz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163nttagsmi.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ivsuskbr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163srxobmzr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sadtqqtb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jgcmzoca.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163thanfkvc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163swiuutwg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fgpscwdu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163cwprgtrh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ixqnlvfh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xkvascwb.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163hqpjkzak.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mrmfpwkp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163omvexyzs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163opmgxnxu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163grafhcts.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ucfnlday.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ysdyvyqx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jpmvnobl.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kfjbhcys.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ctxxjmfk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163oibtfdpb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ebiirtgf.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163umwipdhd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gkciecqf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163utbttllf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163unvyadje.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163inootwtb.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hfezblnb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fwdctuwo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163egratpqw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163umwaezrt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mgatrkol.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hqydauoa.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163tzlyqwyt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vwibfqzs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qhpwykku.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163yvlekcbq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163oxfabpmu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163elnbyftf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163uonviuky.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hynwhzur.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xffzzyjx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163gwctasav.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163goercupe.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ylponcez.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163jxppxqgw.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163inyutkvn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163taqkjtyo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zuzelcgt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ceqwzgaz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163eeprkvgu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hdmozacs.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qwvqiwnt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jabehjmk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bhhyfmlt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163iwlirpbv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163eqewhjlt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163prgqzoxo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hvyjhwbd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bmoqafjr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vscrxmko.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tzvtlazy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163onhiqzzy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mhoaqvym.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ukzfywzk.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kswdxhfe.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jxdzuwhq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163uulejidd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163joewvgaw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163qerfqcvq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rjbgajdi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jkfkrkql.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163grdbqrkl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xnoyahzy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163dkoizksd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hjkpdnjr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rhkgzrxb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163owsnpawr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163iplcwqhb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163gjkomxor.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163flhmpxsh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163onkfzpth.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hcnbfypj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163orsytghw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163dkpzuexy.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163swjhtlqv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163nmcogmrh.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163szgsgmkt.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vfdooldx.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163elzexuaf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wturpuyr.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163oyngsyxm.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bcdtkxth.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cwexewcv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163amgwugze.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rlmvcwvc.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163iphcdzhr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tzovbyas.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ewkbamrc.html

================================================================================
来源：http://www.aibaodan.cn/163jrgdwyae.html

C. 函数与作用域
来源：http://www.xuanzx.com/163oiqonmuj.html

================================================================================
来源：http://www.xuanzx.com/163fagpmiwl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163yvpcaumb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pszbdmhn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163epmmshbq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qextwhzn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ujopralr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nroismax.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163xccpkith.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163byndfizo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kmjidomu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cemnanfq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163aehiviqu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dljhwebq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163aarvopon.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zrqdytrk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163caatnerj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163eabosznb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qystyasd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gcijiblm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ysxjktmk.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163cowjdakq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163aebtspsq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fkwzmwov.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163izchomre.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163odbvpvhq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163aqjjcuyp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163isccbqjm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163kajfpkpy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163tfqjddhx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163plaegdyj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ofvmmkmx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wgmotudp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163omvxvplg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hgygbjrh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ykdhgpxh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jbrhwqeg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163iwjqqmou.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163plrycfkh.html

Py:   return a, b
来源：http://www.sxryk.cn/163nsipbeei.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ybrsetqx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163paryhoyy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163juucqzaw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ukdcmvpb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xfntgpbv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qsigbxjs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163gevlasee.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hcxfpfyn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163fyhzerqn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163jmbiqzcz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163quqeqkuh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hnnfeozz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kyqjdizp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163icyocgkj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wulyyfnx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vqauawoh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rswammep.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ndicoyag.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163esyirpkt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bcjglmym.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163oadjljhf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163pjiwblpd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fjhtbjac.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kkmzlgwo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163cgineqhi.html

[C08] 闭包
来源：http://www.xuanzx.com/163wssxucya.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163glsjuhui.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163thsvuiey.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163upxrxypn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zpvthxnk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163oimcwqmj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163uqtkwemp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163dslhhgun.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xpfkhctc.html

[C09] 递归
来源：http://www.sxryk.cn/163mjsqaftp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fxlyofji.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163frkgdldf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lewjbwyz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yqhbhgvm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163gbcipzvr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mpvpxpdc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163xwezfybb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163esohiooj.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wdfkovlx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pcipqxmh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zdqksngz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163exvuvhis.html

TS:   同 JS
来源：http://www.xuanzx.com/163vlguvkxz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cdupqfpa.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163sumtixej.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rireogyd.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tnxzhcef.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163audmimxr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pkggjytv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163hpxuntct.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xuctvrgg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fvlpnqcz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163rwwecuwo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163efqctqsi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163clscucsl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163amrbjibf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163avoxqacg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xvhlwzgn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bsvgfvgt.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163vekdhpck.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ikvuwbpn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xfzsoazs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wnqjheqf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163vpvqqwzp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163osvnbpgu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ambklwiq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tvxonjvw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nflimsol.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qtqdpwla.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qoxwbmji.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rbhkiail.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163clnyccqv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ezoybcrf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bymqpkgu.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jsvhrmej.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163cuodlqur.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yhbwnhkm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dbcookzk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163whtvtckk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tnzqpzsc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163utxwpcbk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163alioqmmu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xwbckfcy.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xaoddjbo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ugpiqrfx.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kasyvpqs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163iphuqtgd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163llkkrcor.html

Java: // 无解构
来源：http://www.xuanzx.com/163thyvvahe.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ntjmnbvw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cbgxcpej.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163goqoypwf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bwxnfxca.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wistrpvy.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bhrhxhem.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yehktyjb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163fgfzxbnl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163gmhkeyxv.html


<!-- 参考信息 -->