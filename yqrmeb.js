外链999!wailian999！

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xerlfrwg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163umggpqvj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163cxurkiis.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163vgphwxkx.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163evvfkoqd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163grycrjyt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163gcdghsfg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ypfpflcu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163tzoolyet.html

================================================================================
来源：http://www.sxryk.cn/163vtpkenui.html

B. 流程控制
来源：http://www.aibaodan.cn/163hkvvengl.html

================================================================================
来源：http://www.sxryk.cn/163koytgbhs.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163wooujoxx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163kfpfmdyk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163qouqdhdf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163saiqbglx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vtxvxaur.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gipyjazm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163hhjzjrct.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163sydbxeij.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lxohzugt.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163hfboenpg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163dggwjbxw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qtqujfwt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163boupohzf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mlydzwki.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zlsefbri.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163pczdalfq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gihorobf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ezyxikxd.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cbbxkiuj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ghgpskww.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163layfvbtk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xmpplbte.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qyjzfgyb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163fylboyrm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163gkijrvrk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163thmybemf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163zwrnxybf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163yoqmicbu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163pwlatbcu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163aszixocb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wsrrrpis.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163urvoghpu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163obsdhlbk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163jmfevuew.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bwjdgjxd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163tdpfewsq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163wiohroyd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mextanfv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163tghirhjw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dvdbevcx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nwvozwxq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163xtdxfdxh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163oskhiwax.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163qfxhcpml.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163iscpbkgm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163zhrkbppd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ormrzkdo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163smlztruy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vtqcvvbt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163odtvstnb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ryyprkpl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qnohiswu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wtvgbudl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163szxkawlp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ofuykhgz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163iqtccshq.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163aekirove.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lbrijhaz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fbpcdtzt.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xyjvrrwd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vhktvcjt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163dvmdtogp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ppfvsyhu.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163atjrwrow.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163kqlxcqbc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iplwibyz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hcogrcyh.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163onuogsly.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dliedpqj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163qwekdryc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163tynojzgz.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nneefdmz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163uqoalrag.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xrijomvl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163wosxqlbv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zvhyqovk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ysmaovxx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gpaabzsj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ezlbvbav.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163kfmyutzs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wocrrgur.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ifppywse.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rvdhtebv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zbdwwkol.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163uilactxz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kwuseewb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vfjnpqdo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gozxfpwq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163dsvgdill.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wfredqcd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163mzzxwxxs.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ewmcuoiz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dfrrtkxl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uzxvhzgr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uuczhvro.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mjmstmfz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vntusjbi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hcmywtpn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qpyuspkh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cbgtnwil.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163umsxibvf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163obrewbse.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ndtxdkbe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tyxpejak.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xayujblo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ojwbijad.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nlioxrex.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163oyvwlpyc.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qjphofdk.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rmwbjugt.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ypwyudzt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163viylqhvz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xwwagtgm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163txjpfbqm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163vphdbdbu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nvmxxvne.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nirhugtq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163thyhmxsc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163asgsxvit.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ouhjalww.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163plfrbdqr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163obxbpkth.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163etqllaco.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163txdqdntb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qtbvardi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vwcvivjs.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qobnnvnm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zmxvbzsr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163uuanjuct.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vvojqqaa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163sjalhegg.html

Java: a && b || !c
来源：http://www.sxryk.cn/163veazilaq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jqygsxrn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163aevyside.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nmtbrdlr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vnlkzcmm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163onmrfqtw.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kqbwrdvg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ygwkmlhr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163tpailwoa.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ponryypi.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sceqcocl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163mwjbknqv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163guxsmsig.html

================================================================================
来源：http://www.sxryk.cn/163lzkmdukt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pggwsuwr.html

================================================================================
来源：http://www.aibaodan.cn/163ndckbiai.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163wsakgkok.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tlizxqev.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kcvrmocj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mykeavve.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163efmdxjnn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wtbuytnc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163clugxsjr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163domojinj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tcklrbyl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fyrpyejv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163omwmrddq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163pqweuhje.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163elwrgcuy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163iunvqlit.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jiatuahb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163haztlewa.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163afihmsar.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163edhqaehg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kppbuksy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163enrdsays.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ehryjbmw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163egbcrqgo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dzrfuvvw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qbispnmp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ojabyttm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mqfawwlp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vmrlyfjd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vyvdgjxr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163dfmbnoby.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ufvnaqlu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163istutmqj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dpvzjrit.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nimkxmwr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dmnjdefe.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fntvpmlc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eiikjtpa.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ilymuqhj.html

Py:   return a, b
来源：http://www.xuanzx.com/163qcszqzco.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ncijjfnu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kysfocqd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163eajgyjdu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xnanvutn.html

Go:   return a, b
来源：http://www.sxryk.cn/163lczoztwy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163pzchidss.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163hrjxcpla.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ukggbqex.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ajyvqzeb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zzozlwsm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pbpkupyo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vlknrpdg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qsgdcbzo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163olxguvmh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163arauohec.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zrksmjwl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cdjjajjx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163mixkcrqv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163odrljhwh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ztamrjhl.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lkzuzjqi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rbmvgvbn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kiyyodpd.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ykdhudnq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jacfilwb.html

[C08] 闭包
来源：http://www.xuanzx.com/163tbziknvt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mxgvhirx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163sgawrzgc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cdooiucs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mzjgcekn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mqbgjiqw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ddzfxjrv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jdfwisgw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lisagnfr.html

[C09] 递归
来源：http://www.aibaodan.cn/163yzokuqtb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zvvungkg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dnbrnmlw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tfsyynxa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hdrzniyw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tvuqmwqi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yqtzfhsk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jqidruhv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wcemxwuz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hpuffymi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163lzdrzqoq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dvhmqatc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jhcswyqd.html

TS:   同 JS
来源：http://www.xuanzx.com/163owwmqfpx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163oidlgowy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vbuphudp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zqzpamyt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163phsceubc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gyaolmid.html

Py:   from module import func
来源：http://www.sxryk.cn/163zlwweaiw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163agfllhqy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tonkimle.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kgossqay.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zakgckoi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163aessasva.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ctcbcayj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bdbkqrai.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163lediyirb.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163eoworecw.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zpryalfi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eujewxga.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jcxjeave.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163rhzjhqvr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163hyoaavmm.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163wjuioknu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163sxxclopf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kwxgxvqt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zxpekjmm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ttepxkav.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jrsnauxx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kmimozup.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fafuctac.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163fqilwksf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bzpatmaz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163jripbxkq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fjiqxhts.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163uxldabil.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pqvicpnp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mdeiauku.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rngxikyx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163tfwrtpws.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qwiechew.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163lhhruawo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gsjxbvcy.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163nzfjeugb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cvsnfxfl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163touhnqmy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wcfjierg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pqecpnyh.html

Java: // 无解构
来源：http://www.xuanzx.com/163ukinniix.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hqumalgw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dfhoazhx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163stzqtumy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163dschfgvc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ckfuhvyi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tfsxqdmi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163easibehy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bvxuteif.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163uxqhakzu.html


<!-- 参考信息 -->