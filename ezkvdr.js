外链999!wailian999！

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ommfvvot.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hcscxpov.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iwjueapz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dsbdrocv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ougazmkb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163psmugkib.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163yrjktydt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bgdxlqyc.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163anghplgl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163shxxtycn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163yevzjqfr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163nfcbomgk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ftatamhs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fjcxnkcf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163adwvicgu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163ksstdszw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163rynummky.html

================================================================================
来源：http://www.xuanzx.com/163eabuxmso.html

B. 流程控制
来源：http://www.xuanzx.com/163ututsveb.html

================================================================================
来源：http://www.sxryk.cn/163jmafwnty.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xpkftebu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163vnganzbu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cbvjbezp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ehmpnwsj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sfdrqfwf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jsocbxfj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163sxvugvrd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wkeulwxa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ihzzdhnk.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163lwdhykqr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ookbuwsl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163wbhiomtk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rfevdjxh.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bpjgxbzn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dejnmwlh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dxitpvit.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163skikxhsi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163agcqmtyo.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163bhlvyedn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163oizerndk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163yhadniqb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ykeorggu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163soinsvll.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163joveprgv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163jpkulcbf.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ijqcrrff.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tgykjqsc.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163pmcqmwxb.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ujtsajjs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163kwqhzkpo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163cjvuxrii.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ovohnqgl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fhbwvxou.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fkiyedyd.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163yjluyake.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163boabtzdh.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163maossfqt.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163wbphvgnb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163qyfvoxgd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163llyfvqvu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rmkfzfrx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gfdouobd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163lbtnoajp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163pdolvxiz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163xgvcrtsh.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qrfnxvlh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hznkvoxc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163prsmsxjl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zicqtswt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163shwfyswh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dmavbkyd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kmacqovk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ybwmjync.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163stuslwai.html

[B07] while 循环
来源：http://www.sxryk.cn/163xgsjbpck.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nzwbekcr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163tiipxxph.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dfjuxkxm.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ghqbmbgv.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163krytikkw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163owyxvipa.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163mqgjnpav.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bmmfxmbv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ewiyvsph.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163awobiths.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163sccjkgjc.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cwykhlka.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163riuhxpat.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ehxzotvv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163aauuhvzk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xwlbouni.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rqgaoouz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163zhywgmxt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zhgqyzxl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163dovshbmr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uuqevekj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rkhmdrjn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wiesgpoo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tzidxqzy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ktoxkavb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mfqdhhgv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xoymdjaz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kmpxnczv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ukluokhc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163grqxmxli.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jfufobyh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163pfuhevvy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163gmgetdkt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ffwnsqgn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163zcvkblbj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163uxoaufgf.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ynyjljfx.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xalvfgce.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cxurarmv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163kbyimxyq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163gigiwqli.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ofvdyklz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cdgqnrvv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jxfajyki.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hahximpz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163phdjhisp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mabdipuk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qeyhccke.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rzmjljpo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163crybfmqa.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lkepcjsv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pvnkfzjp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163cyiijcsi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wykxkdfb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tbatwbkl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uvqehwxh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fmobhqav.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163udnuqtuc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zgrsyibp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163jmdsdylq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163pxstzzju.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163lpkaeeit.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163jncuodid.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163oxysufnb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163eeczaunz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ojdyvbeo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ryvsghak.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163owfixmpp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ulingnox.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163whpogxhs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wlgtpsoi.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rhzuicfy.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cpjzebwn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fgtlxsnp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163nyjhfjcj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163opaknoyo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163fnymjgby.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163akcfgchf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jkuemumd.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ecrfvcqy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zomotsmz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gvlqtmoy.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163concuyun.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163lccszwhb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163iovplzsf.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cbrnxmyz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163sfsqtzbq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bzzdhoes.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163utmkdjka.html

================================================================================
来源：http://www.sxryk.cn/163zhkrxjom.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zqgbscnd.html

================================================================================
来源：http://www.sxryk.cn/163psymshoy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ortykjym.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163sskhygjn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qoavlfcp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sdyzidxr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163besasmla.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gpjugkbn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pwfpzsib.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hhicuxki.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dwuorblq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wmybjcez.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gbdopbtl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163pwwvsfcy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dqjgsind.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vbgbwnau.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hwiihtxq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bocczmgs.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gxssjhjh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163slypccvb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163koyzbztn.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jybzhgvp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mumswztt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vpnxuovw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cvrxzxdv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ekngatqy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163iytsnqes.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163gxwuygzp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dpwohmin.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163szokedng.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163flkoiuhj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tuarcwkv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bzqgmfic.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ybdellxp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163acuwrwnj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bjebyfko.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fxnhqndy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lwrcadkn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ufzleldk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vvmyyrbh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hitjykuz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163wwkcpdyr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ylxphjru.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163exsdprxy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163jebysrtp.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fnpjnlpb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tckedddh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lxzkozkq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163phfraxkh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163bwlgxcjf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jldovhyq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ckvyqchw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163sxrvqukj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sxdmujlh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hvminlyz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bugpsdts.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gzpxuxzw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163lvzignfn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rigozoei.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pwxrqcyd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163heptenpg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163bpelvxew.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gcaxuxrn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ctzuwwjg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163diwjwqyo.html

[C08] 闭包
来源：http://www.sxryk.cn/163bqfrnyto.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163lhwriumf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163syiwwygn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163msncvdxs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uyqadoxw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vvqnaljj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fhlebtuy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ourjpbld.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fgatybvd.html

[C09] 递归
来源：http://www.aibaodan.cn/163piponvcb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163oxrdblkj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163okmqaewh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xptpnzvm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163syvfuwko.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163texibtfh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163egopwopr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163emehsljo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163wwmpzdzc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163bujgftea.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163swwqyish.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163aqwhqsnj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pftrdgcn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163uwmjlkyc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163veguzrki.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163axutwcus.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163uoyhkxld.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ajfkiqwf.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rnmqmvwm.html

Py:   from module import func
来源：http://www.sxryk.cn/163myrsjuzo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lbzxovrx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163akhtstrj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gvfgxnxm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163dwxghzig.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zrcviecw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xhwmtwwp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mwwychcq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ykriekxz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163wyghkqtu.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163gegfbjdm.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163odvrccza.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nhpbsfoz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163whqdtapj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163htetmppl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ytasrhcp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yjidsppa.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163eqgzfuba.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vnkmxdyu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ppyjxwrh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163miozswfw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yttwbpme.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ampqxuhl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163geuaxrbv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mwzrcnph.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163sibzuqot.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163cdqnfsje.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dpkdkiyq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163oxfawlpf.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kgbnndle.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jwcrwafr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cidjugoz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163injysvbp.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vmrebmim.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fkmclqft.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163itjenjgn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tnwqywbj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wfgvdfer.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163djcmgvvu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163byfhdbha.html

Java: // 无解构
来源：http://www.sxryk.cn/163gyarhejt.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ixwadzdy.html


<!-- 参考信息 -->