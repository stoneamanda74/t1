外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163vtoxfukc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hsgrajdj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ojywqxgp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zdmzmjsa.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163xpprspif.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163whftmpta.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163xkstwwlu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163svdkbioi.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qeemnmqa.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163gnlhyoft.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163igdbrbtg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163epizanvv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163sapoiqkr.html

================================================================================
来源：http://www.aibaodan.cn/163ufdmimzs.html

B. 流程控制
来源：http://www.sxryk.cn/163feqnvrkw.html

================================================================================
来源：http://www.aibaodan.cn/163iakzzhri.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ereffqyd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163pbtkxdde.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163utzfsyvr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nsrsakqy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xbgikssh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yegnqjwf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163vbwavzbr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163yyqrzgvi.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cwmocvla.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bclmimvi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hobdeilb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163faddrmqk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yyleqlvr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163raykmmpn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vtcrbrlg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bkwyltog.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163cazzocus.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163djqodbds.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163txhryugn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163qkxiydec.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ddwgpqap.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mzpptham.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163afvcbyen.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wkwyabfk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163xhgivekw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lkaxsskv.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ijwicewy.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ifmtbrlt.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bkyyktbx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tklxjzxb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rkkycesh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163falavier.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jqbdbaor.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dhngxrwj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163notcdoiz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163wimmoyzj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jlsfbyfd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163edxwqhgx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163asosvbou.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gmdqxdci.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xjkhuniv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nornadei.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ntmyewdo.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163welahqlr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163gcbudnss.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163kmmndoou.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jqpvaxpg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vfssptqv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163moeildym.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hqkvvmud.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ogvoydok.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gurxsnkr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163idhmckjf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163pmuaeoev.html

[B07] while 循环
来源：http://www.sxryk.cn/163mxtiqsji.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ubxzojrv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ncyrsgsy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iartniox.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ingrcxnz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dxgbradb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163jnvzkmbz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163umwqepcz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qdsfvejc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qqfdbiov.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mclkskla.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163rwydyvel.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wmmjhjqt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163buexlulk.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ztortuvv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163mcjweczg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163bdeutcia.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bcvptnnl.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gdqdlyly.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163vbojkjpk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tfngwvvy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fppfmhae.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vcgurxsv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vhjhbazo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163udlepsbs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mthenllb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fdtrjsju.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rqscixio.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rmxbszlu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ebqcqjnz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163aklhdukw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hwfugsbi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163cttcuphh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cldwzifw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rcfmykia.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ruoljlal.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163feczhjjb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163chzpnnwh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163yzgxedvd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qchtpbhs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163basptzju.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163uvznrzbo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ngrrmizm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163gugwfdok.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ioeuccwg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163msttraxr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163plndnekl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ldfmdcbc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qtbfapxj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163adyhjbqo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ggwjdvec.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163mgackimd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163hkiciaoo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163mlartkwi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163doomeeua.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163yvdortap.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zqfgqghm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hltcytxv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gzytkugp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163qfrxnocd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163acenmywv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xnhotvzl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163iqzazxbe.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163iicrrnlv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163koyikdby.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vcqnjbbe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rptbqbjk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163atdrdjxd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jdqqwrkb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163swqwhipv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163tpenwoqb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qzpyznls.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cyhewlxh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zybnaeli.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zmnnfwxl.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163evcluxnd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163fmxjihsz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ubbymvqu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kqrrrhox.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163rocsbfze.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163smtkbhxg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rdbekigk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ratayhsj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163yetydife.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dtqkxpuu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gzwwazxj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163rkrkqwod.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wdwaadle.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163hrvmevzq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163owqlreim.html

================================================================================
来源：http://www.xuanzx.com/163eeejjctx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163sisleugy.html

================================================================================
来源：http://www.sxryk.cn/163gppkjggx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kkrumkgs.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pjclauun.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qjtkvied.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gbnztcjf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pmhyamvx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zegkjddd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163scohhnjx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163joqojuww.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163orlipskn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mwvwmmmy.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163swoqsbaa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xdhzclig.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ekgaeouz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dmihnjfe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kbauhgnl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qyynuidb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kwwvajpz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zhclgasu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163cnumyyfk.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ovzhhbyk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163auhbjbhg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xqmsnujr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zbyfwddd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163czwguznm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mipsidah.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163llmsqnbo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xmnazriv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ufdegmir.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163itgjagcp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163fgdkpinx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163akvxrfnr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pbraimlc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qdgjaozk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163fcyobnvt.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rcgscbhp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wuwpjliu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bihsdcof.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qbjgjqhl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hfzwiasc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163blhnwbjy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163eqtuaujj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tieydoqm.html

Go:   return a, b
来源：http://www.sxryk.cn/163zvieajdo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163nsrjzvcl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163zhtzushq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163anwwmzmc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ggxjuuls.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lepxcgjj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163foywhoul.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163smcifdaf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zmenpvpx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zykzzsvw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hadrqxch.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163olsxrbrc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163sygcfmrz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163xywocnhc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rbgfejgy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163havhjcjp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163uzhbluar.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163trjwjezx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163pnpuxscy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163abyadqaj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ztvpeoev.html

[C08] 闭包
来源：http://www.sxryk.cn/163conoweek.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163amazgmnw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163etkqwcvk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pgfwwwiv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gvmlkkrx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jgtkciyr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bupsfpoi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rahcddvd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rqwvcjwh.html

[C09] 递归
来源：http://www.xuanzx.com/163hbcbggan.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ufgnhghs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ukzwvnqf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163sksnwavu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zetsfatd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163eblepqdq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zscdctkn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bpgbylld.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163aycafwys.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163byajvtme.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vgtzezbi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qxbevxqk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163wnrdqpap.html

TS:   同 JS
来源：http://www.sxryk.cn/163vwjpofgl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nmpihsrh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ovgpqjce.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163crkxvfhv.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jiozugre.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163rwdquccm.html

Py:   from module import func
来源：http://www.sxryk.cn/163dketjoeg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163omxoqbmg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163axbasbpv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tthahplc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163guumzncu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zrqszklz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ajfrtyyj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kfslvmuj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163snfldtmj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jltmlsgr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hkwjtbtx.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163erpblzga.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dtdrfnem.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163onztzmgf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ubewyibc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163iuvsnwni.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163bpoufxdt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163itwyqlka.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163akvblpzd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fslyefez.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163oyokjbdu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ldaubuiv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uekenvad.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pxtjtohs.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zbeycjql.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vftvkphg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163blhlbuwr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hplfyvjn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tmhkfeup.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gvqesndz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ieyndxmn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163szyjxwpc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163lhozmtvh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163kdcdfinp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gesrvqgx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ndrpuokm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rtdiuejh.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dyfipsqw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vlgsmqsf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ietyotxn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163retwazts.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fivfsmhr.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163nnbtevqp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jlhowocf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pvwvuphm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163nqcbcesl.html


<!-- 参考信息 -->