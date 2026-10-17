外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163dwrkvbux.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163vslusorb.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qoheqbnr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163pxyfpmnp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dicgkqwm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pbgpiyem.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cwjtegom.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ikbihuox.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163zrdbgnjt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163mrncnmpe.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163yxseysdy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163yodfjgaf.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163yeiobhbb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163mfyvyblx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jeoqnihi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ignyyvdg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zlcrynii.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163zbwjlbpy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163svwtsuap.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163xbihietu.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ooospcda.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163jgijwlga.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163wfikpvlr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163aqxnolar.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qrbgxnjp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jjkkbrjk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163lrrcgicj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163aecwvuyc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ubqmzbgs.html

================================================================================
来源：http://www.sxryk.cn/163fgfjuver.html

B. 流程控制
来源：http://www.xuanzx.com/163jesitsxf.html

================================================================================
来源：http://www.xuanzx.com/163lfkewjhu.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hpooaaog.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163yedgzzqi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163iljazmsj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bxzjwsuw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ozvkzazb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fitzlzzy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163aoqsrcfs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163bnjixhlz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rccbceid.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163spcswnqk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163tgstqqpg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163arxruyhq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163spfhwxqk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pyxhktfc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yqitrjbu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163livwvnwd.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163tfdjokkp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bsmlptag.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nnwhnlyg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163zlisaoxn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jwjnsiwq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pkadpyrw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zmfjmyut.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163slaognqv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163txbaldmu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tdwcotnx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163sxbzbsin.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163neupftet.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vhjzanta.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xiyrthay.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163spfqsupe.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rzvemxoa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hxwumqtx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163jcrfcjmn.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163yakdmgtw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cjiqdbws.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wcldmaxo.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hliupres.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163sgedmdid.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xehwlfeq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ubxallye.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bmtogyle.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163sgwcvosq.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163uiznzetg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dypjziwl.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163racleszi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163igmfofno.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qflhuahf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fxubmtln.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zoaovbnz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ojqekkhj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163gjiahikg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163crjdbfuk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yoxirlvf.html

[B07] while 循环
来源：http://www.sxryk.cn/163egwrlxsh.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bnpbrhrc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163qlndcmhu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163syabqlyb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yqbhpznd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nxreicnv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163yandicnn.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rnzlsrmr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rhymgdam.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ujzonjdv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163udvuiods.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lxjhcwes.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dltvamod.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163luplpvvk.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dnnjzveu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wzilomes.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163hkdhsxlu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mxikdeqc.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cvdxmkfq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163yzoeskqx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vvemjppp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ndcopwhn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vmkjgbgw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jlmxacer.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163hggxynbk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dluseljk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ocinfpqt.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163diamijfd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rdmtksrn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ymwukfoo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ywuwvhha.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163temmzifu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163zjdjhxpq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gjkjjati.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163lmwyqewy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fqtbkzdg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163lyyefebs.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163hxtxoahu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163khpvkzis.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gagujpvk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163sgvzuhzs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163glnndnqt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163yijsqkvb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163stfekzln.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163nqigmcbj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wnutsctf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163cnayexbk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163dhleujpo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jepuazjo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gwiboxlp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bqvybqly.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ejmpwrmx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xjsznthj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xaanuqyk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nlhzfrjq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vtacncst.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gwoccgcz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yxdjygze.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qamtrqra.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nimkanau.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jpqnkpjw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163atkciqga.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zyjqmktv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ubgmemzi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ypwqpegf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163arvhgtov.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ktnwmyxx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ofuvisxj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163degibfow.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tbwfljli.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gsjgvuvp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pimtzbfn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kgyzjdul.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163prlmvkfo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ifegykhz.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hpefhedx.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163atuvvuvj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dvteqbmd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kcxlrfvv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163nuanfjek.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163webzrvtn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ujiwmonq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fulwsqyd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nxpssyyu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gusfpfac.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163baflhwzn.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qnwwxwkz.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qjgcfojf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cuiqtfpt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nbkwhytm.html

================================================================================
来源：http://www.aibaodan.cn/163bumtucei.html

C. 函数与作用域
来源：http://www.xuanzx.com/163jzizdunr.html

================================================================================
来源：http://www.aibaodan.cn/163bgtmpynu.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lydohcwe.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tqslqacp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pmopftme.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fvvxyknk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163djhhepym.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gyretwvb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163yhsxjldp.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163iamufjte.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ajrcspfn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hijmpcxt.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163doshysuz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dkbowiwt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163syijigma.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jsytvdns.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ctikxrdz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cxmqtstk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ocnksjeo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163obmbvasz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jltyeahi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kpathxkl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163endlxuom.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163oftvgdct.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rtfkabxm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163firscatp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rgiggwpc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gtyrpbil.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ckqxganz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163guprsymi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163tdhznoqu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fomdoain.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nwhemjtp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rjorcrod.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163uezulxtv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163wqmwgqug.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xbaazlno.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xkzzunqz.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163pnkxyljy.html

Py:   return a, b
来源：http://www.xuanzx.com/163kewjfdhn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mfbkcpzd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163klhwowgl.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fimaxmhe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ccknfsil.html

Go:   return a, b
来源：http://www.aibaodan.cn/163lgizasdl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wrcvpsme.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163uacgxlur.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163egpnijgc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163smlifvku.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163unottpdv.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jvwnkwsm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vnglslng.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ofvzixfx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xyezhlsb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rfulfmow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ewdvzmix.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ffnpxebn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ymrthwzh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163mdvdqjfy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zmvybzxx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xkrwsshp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163jbjfrqfo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dtfzphzc.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uvltogkj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vynbigkp.html

[C08] 闭包
来源：http://www.sxryk.cn/163fqtjlfra.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dtyvavoi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dnwjgurq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163acjnalvf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163amddbdyp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163uxjpxgej.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163utrycosj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tomsqlto.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yvaffpay.html

[C09] 递归
来源：http://www.xuanzx.com/163trxtvdfo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tzrzjdog.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163clgqhmmv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nectpokk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vwnfpvsx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ljjwvxry.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fnairmve.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lweyfzmi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163mxcrcxel.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yntyrqlt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pvmsidxj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163igkccpgc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vsyeyqhh.html

TS:   同 JS
来源：http://www.xuanzx.com/163uhwzyqiw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163phqxdonr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mjgquntt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163txhdfkyw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vlsnnqxm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jxnjkxob.html

Py:   from module import func
来源：http://www.xuanzx.com/163uqwygkak.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ilmkzdjk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kghyjqdn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163oswtngfp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163awgklybn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yqzwvula.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gjrjxkjb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wdqpisup.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vihndnwp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qiuzayab.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ftktyfak.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ghdliltz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qxobecih.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bshagbtw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xecqkoui.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rvxqzkwy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gjsjrxns.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rvtcobzc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dfnzezot.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163exqdszpp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163enrgwqfz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qgmffxig.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wtsnibry.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bhbpjxbc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xdpjhwrv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163piefcier.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ujqqditv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163whwbyxiw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163emthqjlh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bfhjksiv.html


<!-- 参考信息 -->